  /**
   *
   * @param {String} arg1
   * @return {String}
   * resources/css/app.css
   */
  AppModule.prototype.changeThemeFile = function (arg1) {
    document.getElementById("appStyle").setAttribute("href", arg1);
  };
