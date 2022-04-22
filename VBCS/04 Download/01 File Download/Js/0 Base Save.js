REST-->Save
$chain.results.callRestGetDownload.body.type
test.xml

/*
  Copyright (c) 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define([], function() {
  'use strict';

  var PageModule = function PageModule() {};

   PageModule.prototype.saveFile = function(data, mimeType, filename) {
    const blob = new Blob([data], {
      type: mimeType
    });
    // IE/Edge
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob);
      return;
    }
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    // Firefox: delay revoking the ObjectURL
    setTimeout(function() {
  
      URL.revokeObjectURL(blob);
    }, 100);
  };



  return PageModule;
});
