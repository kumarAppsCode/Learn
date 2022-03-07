define([], () => {
  'use strict';

  class AppModule {
  }

  /**
   * Function to downlaod file from base64 content
   */
  AppModule.prototype.downloadFileFromBase64 = function (base64String) {
    var applicationType = "data:application/text;base64,";
    var finalContent = applicationType+base64String;
  
    const downloadLink = document.createElement('a');
    
    document.body.appendChild(downloadLink);
    downloadLink.href = finalContent;
 
    downloadLink.download ="Payment_Report.txt";
    downloadLink.click(); 
 

  };

  AppModule.prototype.getFileFromBase64 = function (base64String) {
// decoding the string
const result1 = window.atob(base64String);
console.log(result1);
return result1;
 };




  
  return AppModule;
});
