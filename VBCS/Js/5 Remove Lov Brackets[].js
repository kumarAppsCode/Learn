    PageModule.prototype.removeSquareBracket = function(jsonObj) {
      let objAsString = JSON.stringify(jsonObj);
      let stringifiedString = objAsString.replace(/[\[\]']+/g, "");
      // console.log("===>>"+stringifiedString);
      return stringifiedString;
    };
