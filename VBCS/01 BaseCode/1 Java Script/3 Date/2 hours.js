    PageModule.prototype.getTimeHrs = function (ltime) {
      let lvalue = ltime.substring(1, 3);
      return lvalue;
  };


    PageModule.prototype.getTimeMin = function (ltime) {
      let lvalue = ltime.substring(4, 6);
      return lvalue;
  };
