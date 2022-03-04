define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

  var PageModule = function PageModule() {};

  PageModule.prototype.systemDate = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+dd+'T00:00:00Z'; 
    return today;
  };

  PageModule.prototype.sysDates = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+dd; 
    return today;
  };

  PageModule.prototype.pagingPoHdr = function(array) {
    var data = new PagingDataProviderView(new ArrayDataProvider(
    array, {
      idAttribute: 'po_number'
    }));
    return data;
  };

  PageModule.prototype.paginggrnLine = function(array) {
    var data = new PagingDataProviderView(new ArrayDataProvider(
    array, {
      idAttribute: 'grn_track_id'
    }));
    return data;
  };

  PageModule.prototype.pagingAppHistory = function(array) {
    var data = new PagingDataProviderView(new ArrayDataProvider(
    array, {
      idAttribute: 'appr_hist_id'
    }));
    return data;
  };


  PageModule.prototype.dateConversion = function(datevalue) {
    var today = new Date();
    today = datevalue.replace("T00:00:00Z", "") +'T00:00:00Z';
    return today;
  };


  PageModule.prototype.pagingAttachmentTable = function(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'id'
      }));
      return data;
  };
// 
//-----

// following is downloading a pdf,
// you can download other files, you just need to change the file type
PageModule.prototype.downloadFile = function(fileBytes, contentType, fileName){
// var blob = new Blob([fileBytes],{type:contentType});
var blob = new Blob([fileBytes],{type:'application/x-pdf'});
var filename = fileName;
 
if(navigator.msSaveBlob){ // IE 10+
  navigator.msSaveBlob(blob,filename);
} else {
  var link = document.createElement("a");
  if(link.download !== undefined){ // feature detection
    // Browsers that support HTML5 download attribute
    var url = URL.createObjectURL(blob);
    link.setAttribute("href",url);
    link.setAttribute("download",filename);
    link.style.visibility='hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

};


// 
  return PageModule;
});
