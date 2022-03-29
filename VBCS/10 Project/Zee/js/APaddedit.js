define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';

  
  var PageModule = function PageModule() {};

//  Invoice Hdr
    PageModule.prototype.pagingHdrTable = function(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'sequence_number'
        }));
      return data;
    };

// Invoice Dtl
    PageModule.prototype.pagingDtlTable = function(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'sequence_number'
        }));
      return data;
    };

// Progress Tracker Navigation
    PageModule.prototype.saasProgressTracker = function(value) {
      var data ='https://*****sj.integration.ocp.oraclecloud.com/ic/home/lite.html?root=bTxnProgress&console=FileProcess_qsLCMnqK&bTxnId=FileProcess_qsLCMnqK:Instance_id_eUwlcBfa:'.concat(value);
      console.log('data==>'+data)
      return data;
    };


// Page Navigation
    PageModule.prototype.saasNavigation = function(value) {
      var data ='https://fa-*****.ds-fa.oraclepdemos.com/fscmUI/faces/deeplink?objType=AP_VIEWINVOICE&action=VIEW&objKey=InvoiceId='.concat(value);
      return data;
    };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.getSaaSId = function (invoiceNumber) {
    var data='InvoiceNumber='.concat(invoiceNumber);
    // console.log("Concat Value==>"+data);
    // let encoded = encodeURIComponent(data);
    // let decoded = decodeURIComponent(encoded);
    // console.log("decoded Value==>"+decoded);
      return data;
  };


  return PageModule;
});
