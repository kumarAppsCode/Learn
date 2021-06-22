  /**
   *
   * @param {String} arg1
   * @return {String}
   *{"type": "datetime", "options": {"pattern":"MM/dd/yyyy"}}
   */

  PageModule.prototype.getSysDate = function (arg1) {
  var today = new Date();
  // window.alert(today);
  // var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  var date =today.getFullYear()+'-'+ ('0'+(today.getMonth()+1)).slice(-2) +'-'+ ('0'+today.getDate()).slice(-2);
  // console.log(date);
  // window.alert(date);
  return date;
  };
******************************************************************************************
    /**
   *
   * @param {String} arg1
   * @return {String}
   */
  AppModule.prototype.getSysDate = function (arg1) {
  var today = new Date();
  // window.alert(today);
  // var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  var date =today.getFullYear()+'-'+ ('0'+(today.getMonth()+1)).slice(-2) +'-'+ ('0'+today.getDate()).slice(-2);
  // console.log(date);
  // window.alert(date);
  return date;
  };
******************************************************************************************
