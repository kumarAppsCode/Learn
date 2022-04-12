define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'], 
function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';


  var PageModule = function PageModule() {};

//  Search
    PageModule.prototype.pagingSearch = function(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'interface_tracker_id'
        }));
      return data;
    };



  PageModule.prototype.toDayDate = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+dd+'T00:00:00Z'; 
    // today = yyyy+'-'+mm+'-'+dd; 
    return today;
  };


    PageModule.prototype.dateFormateInsert = function(dateValue) {
        let dateLength=dateValue.length;
        // console.log('Date Length==>>'+dateLength);
        if(dateLength==10){
          dateValue=dateValue+'T00:00:00Z';
          // console.log('Date Length 10==>>'+dateValue);
        }else{
          dateValue=dateValue;
          // console.log('Date Length 10==>>'+dateValue);
        }
        return dateValue;
    };



  PageModule.prototype.convertDate = function(value) {

  var date = new Date(value);

  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var dt = date.getDate();
  // console.log("date==>"+date);
  // console.log("year==>"+year);
  // console.log("month==>"+month);
  // console.log("month==>"+dt);

    if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }
  // console.log("===>>"+dt+ '-'+month+'-' +year);
   var result=dt+ '-'+month+'-' +year;
  console.log("Real Date==>"+result);
 return result;
 
 };




 PageModule.prototype.convertDateMonth = function(dateValue) {
  
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var today = new Date(dateValue);

    var d = today.getDate();
    var m = months[today.getMonth()];
    var y = today.getFullYear();
    // var twoDigitYear = y.toString().substr(-2);

    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();
    today = d+'-'+m+'-'+y;
    return today;
  };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.wpsFileFun = function (arg1) {

    console.log("file==>"+arg1);

  var date = new Date(arg1);

  var lyear = date.getFullYear();
  var lmonth = date.getMonth()+1;
  var dt = date.getDate();
  var lhr = date.getHours();
  var lmins = date.getMinutes();
  // console.log("date==>"+date);
  // console.log("year==>"+year);
  // console.log("month==>"+month);
  // console.log("month==>"+dt);
    if (dt < 10) {
        dt = '0' + dt;
      }
      if (lmonth < 10) {
        lmonth = '0' + lmonth;
      }

var fianlDate=dt+lmonth+lyear+lhr+lmins+"00";

    let result="199_TMP112712_WPSSALARY"+fianlDate;
    return result;
  };




  return PageModule;



});
