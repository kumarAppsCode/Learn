    PageModule.prototype.addLinePayload = function (array) {

      let isValid = "false";
      let message = null;
      let sequenceNumber = 0;
      var ai = array.length;
      console.log("ai=>" + ai);
      if (ai == 0) {
        console.log("IF=>");
        sequenceNumber = 1;
        isValid = "true";
        message = "-";
      } else {
        console.log("ELSE IF=>");
        sequenceNumber = ai + 1;
        isValid = "true";
        message = "-";
      }
