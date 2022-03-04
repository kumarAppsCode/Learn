define([], function() {
  'use strict';

  var PageModule = function PageModule() {};

  PageModule.prototype.toDayDate = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+dd+'T00:00:00Z'; 
    // today = yyyy+'-'+mm+'-'+dd; 
    return today;
  };


    PageModule.prototype.jsontest = function(obj) {
      let objAsString = JSON.stringify(obj);
      let stringifiedString = objAsString.replace(/[\[\]']+/g, "");
      console.log("===>>"+stringifiedString);
      return obj;
    };

    PageModule.prototype.validateDate = function(dateValue) {
        let dateLength=dateValue.length;
        window.alert(dateLength);
        console.log('Date Length==>>'+dateLength);
        if(dateLength==10){
          dateValue=dateValue+'T00:00:00Z';
          console.log('Date Length 10==>>'+dateValue);
        }else{
          dateValue=dateValue;
          console.log('Date Length 10==>>'+dateValue);
        }
        return dateValue;
    };




    PageModule.prototype.removeSquareBracket = function(jsonObj) {
      // var dateregex= /^[0-9]{4}[\-][0-9]{2}[\-][0-9]{2}$/g;
      var squarebracket= /[\[\]']+/g;
      let objAsString = JSON.stringify(jsonObj);
      // let stringifiedString = objAsString.replace(/[\[\]']+/g, "");
      let jsonResult = objAsString.replace(squarebracket, "");
      // console.log("Stage1===>>"+jsonResult);
      return jsonResult;
    };


  return PageModule;
});
