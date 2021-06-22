  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.getSysDate = function (arg1) {
  var today = new Date();
  // window.alert(today);
  // var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // window.alert(date);
  return date;
  };
