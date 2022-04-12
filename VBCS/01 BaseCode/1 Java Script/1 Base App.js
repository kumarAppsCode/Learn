/*
  Copyright (c) 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define([], function () {
  'use strict';

  var AppModule = function AppModule() {};

  /**
   * Function to downlaod file from base64 content
   */
  AppModule.prototype.downloadFileFromBase64 = function (base64String) {
    var applicationType = "data:application/text;base64,";
    var finalContent = applicationType+base64String;
  
    const downloadLink = document.createElement('a');
    
    document.body.appendChild(downloadLink);
    downloadLink.href = finalContent;
 
    downloadLink.download ="Report.csv";
    downloadLink.click(); 
  };

  AppModule.prototype.downloadFileFromBase64Txt = function (base64String) {
    var applicationType = "data:application/text;base64,";
    var finalContent = applicationType+base64String;
  
    const downloadLink = document.createElement('a');
    
    document.body.appendChild(downloadLink);
    downloadLink.href = finalContent;
 
    downloadLink.download ="Report.Txt";
    downloadLink.click(); 
  };


  AppModule.prototype.getFileFromBase64 = function (base64String) {
// decoding the string
const result1 = window.atob(base64String);
console.log(result1);
return result1;
 };


// Validate Date
AppModule.prototype.validateDate = function(dateValue) {
  let dateLength=dateValue.length;
        // window.alert(dateLength);
        // console.log('Date Length==>>'+dateLength);
        if(dateLength==10){
          dateValue=dateValue+'T00:00:00Z';
          console.log('Date Length 10==>>'+dateValue);
        }else{
          dateValue=dateValue;
          console.log('Date Length 10==>>'+dateValue);
        }
        return dateValue;
};

// 
AppModule.prototype.isFormValid = function(form) {
var tracker = document.getElementById(form); 
if (tracker.valid === "valid") {
  return true;
} else {
tracker.showMessages();
tracker.focusOn("@firstInvalidShown");
return false;
}
};



// Remove square []
AppModule.prototype.removeSquareBracket = function(jsonObj) {
      // var dateregex= /^[0-9]{4}[\-][0-9]{2}[\-][0-9]{2}$/g;
      var squarebracket= /[\[\]']+/g;
      let objAsString = JSON.stringify(jsonObj);
      // let stringifiedString = objAsString.replace(/[\[\]']+/g, "");
      let jsonResult = objAsString.replace(squarebracket, "");
      // console.log("Stage1===>>"+jsonResult);
      return jsonResult;
    };

// 
AppModule.prototype.toDayDate = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+dd+'T00:00:00Z'; 
    // today = yyyy+'-'+mm+'-'+dd; 
    return today;
  };

// Remove Space
  AppModule.prototype.removeSpace = function (value) {
    // var data=value.replace(/ /g, "");
    var data1=value.replaceAll(/\s/g,'');
    // console.log("data1===>"+data1);
    var data=value.replace(/[^a-zA-Z0-9]/g, '');
    // console.log("data===>"+data);
    return data;
  };


  return AppModule;
});
