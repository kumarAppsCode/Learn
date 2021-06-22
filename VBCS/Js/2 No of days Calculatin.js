  /**
   *
   * @param {String} arg1
   * @return {String}
   */
 PageModule.prototype.getNoOfDays = function (sdate, edate) {

  window.alert("Start Date"+sdate);
  window.alert("End Date"+edate);

  var date1 = new Date(sdate);
  var date2 = new Date(edate);
  var Difference_In_Time = date2.getTime() - date1.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
 
  window.alert("total no of days: "+Difference_In_Time);
  return Difference_In_Days;
  };
***********************************************************************
    /**
   *
   * @param {String} arg1
   * @return {String}
   */
 AppModule.prototype.getNoOfDays = function (sdate, edate) {
   var ndays;
  // window.alert("Start Date"+sdate);
  // window.alert("End Date"+edate);
    if(sdate!==null && edate!==null && sdate!==undefined && edate!==undefined){
      var date1 = new Date(sdate);
      var date2 = new Date(edate);
      var Difference_In_Time = date2.getTime() - date1.getTime();
      var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24))+1;
      window.alert("total no of days: "+Difference_In_Time);
      ndays= Difference_In_Days;
    }else{
      ndays= 0;
    }
    return ndays;
  };
***********************************************************************
