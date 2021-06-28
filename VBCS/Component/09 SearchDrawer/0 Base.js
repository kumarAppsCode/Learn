define(['ojs/ojcore'], function (oj) {
  'use strict';

  var PageModule = function PageModule() { };
  PageModule.prototype.showSide = function () {
    var offcanvas = {
      "selector": "#startDrawer",
      "content": "#mainContent",
      "edge": "start",
      "displayMode": "push",
      "size": "200px"
    };
    oj.OffcanvasUtils.open(offcanvas);

  }

  return PageModule;
});
