// Page Navigation
    PageModule.prototype.saasNavigation = function(value) {
      var data ='https://fa-eqir-dev14-saasfademo1.ds-fa.oraclepdemos.com/fscmUI/faces/deeplink?objType=AP_VIEWINVOICE&action=VIEW&objKey=InvoiceId='.concat(value);
      return data;
    };
