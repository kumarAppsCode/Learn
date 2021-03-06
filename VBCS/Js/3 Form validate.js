/*
  Copyright (c) 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define([], function () {
  'use strict';

var AppModule = function AppModule() {};

AppModule.prototype.isFormValid = function(form) {
var tracker = document.getElementById(form); 
if (tracker.valid === "valid") {
  return true;
} else {
tracker.showMessages();
tracker.focusOn("@firstInvalidShown");
return false;
}
};

  return AppModule;
});


// {{$application.functions.isFormValid("CreateForm")}}
//  <oj-validation-group id="CreateForm">
//  <div class="oj-flex">
// <oj-form-layout  label-edge="start" max-columns="2" class="oj-flex-item oj-sm-12 oj-md-12">
//   <oj-label for="oj-input-text--1072052825-1" class="oj-flex-item oj-sm-12 oj-md-2">UserName</oj-label>
//   <oj-input-text id="oj-input-text--1072052825-1" class="oj-flex-item oj-sm-12 oj-md-4" required="true"></oj-input-text>
//   <oj-label for="oj-input-number--1072052825-1" class="oj-flex-item oj-sm-12 oj-md-4">Mobile No</oj-label>
//   <oj-input-number id="oj-input-number--1072052825-1" class="oj-flex-item oj-sm-12 oj-md-8" required="true"></oj-input-number>
//   <oj-input-date label-hint="StartDate" required="true"></oj-input-date>
// </oj-form-layout>
//  </div>
//   </oj-validation-group>
