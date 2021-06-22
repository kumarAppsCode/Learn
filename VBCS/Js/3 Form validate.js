  /**
   *
   * @param {String} arg1 component id
   * @return {String}
   */
  PageModule.prototype.validateForm = function (arg1) {
    var myForm = document.getElementById(arg1);
    if (myForm.valid === "valid") {
      return true;
    } else {
      myForm.showMessages();
      myForm.focusOn("@firstInvalidShown");
      return false;
    }
  };
