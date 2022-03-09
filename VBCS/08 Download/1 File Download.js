$page.variables.fileList.fileType
$page.variables.fileList.fileName
$page.variables.fileList.content


define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

  var PageModule = function PageModule() {};
  PageModule.prototype.pagingSearchData = function(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'instance_id'
        }));
      return data;
    };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.saveFile = function (data, mimeType, filename) {
      const blob = new Blob([data], {
      type: mimeType
    }); 
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();  
    setTimeout(function() {
  
      URL.revokeObjectURL(blob);
    }, 100);
  };

  return PageModule;
});
