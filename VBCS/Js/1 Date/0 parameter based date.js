define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

  var PageModule = function PageModule() {};


  PageModule.prototype.systemDate = function(dateValue) {
  
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var today = new Date(dateValue);

    var d = today.getDate();
    var m = months[today.getMonth()];
    var y = today.getFullYear();
    var twoDigitYear = y.toString().substr(-2);

    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();
    today = d+'-'+m+'-'+twoDigitYear;
    return today;
  };


// budget Invoice Search
    PageModule.prototype.pagingPostalDetail = function(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'integration_key'
        }));
      return data;
    };

  return PageModule;
});
