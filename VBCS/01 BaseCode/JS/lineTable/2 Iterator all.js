define(['ojs/ojpagingdataproviderview', 'ojs/ojarraydataprovider'],
  function (PagingDataProviderView, ArrayDataProvider) {
    'use strict';

    class PageModule {
    }
    PageModule.prototype.getSysdate = function () {

      return new Date().toISOString();

    };


    //  Search Ticket line 
    PageModule.prototype.pagingTicket = function (array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
        array, {
        idAttribute: 'ticket_line_id'
      }));
      return data;
    };


    PageModule.prototype.pagingSearchData = function (array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
        array, {
        idAttribute: 'plan_line_id'
      }));
      console.log("XX---->" + JSON.stringify(data));
      return data;
    };

    PageModule.prototype.xxPrint = function (array) {
      console.log("XX2---->" + JSON.stringify(array));
    };



    PageModule.prototype.setInstallmentTypeValue = function (index, currRow) {

      document.getElementById('installment_type_id_table' + index).value = currRow.lookup_value_id;


    };

    PageModule.prototype.generateLinePayload = function (array) {
      console.log("TEST--1" + JSON.stringify(array));
      var payload = {};
      for (var i = 0; i < array.length; i++) {
        array[i].installment_type_id = document.getElementById('installment_type_id_table' + i).value;
      }
      payload.item = array;
      console.log("TEST--2" + JSON.stringify(payload));
      return payload;
    };

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


      // console.log("TEST--1" + JSON.stringify(array));
      // var payload = {};
      // for (var i = 0; i < array.length; i++) {
      //   array[i].installment_type_id = document.getElementById('installment_type_id_table' + i).value;
      // }
      // payload.item = array;
      // console.log("TEST--2" + JSON.stringify(payload));
      // return payload;

      console.log('sequenceNumber' + sequenceNumber);

      return {
        'sequenceNumber': sequenceNumber,
        'isValid': isValid,
        'message': message
      };


    };


    PageModule.prototype.generatePaymentPlan = function (hdrId, array) {
      console.log("TEST==>1" + hdrId);
      console.log("Start Json TEST==>2" + JSON.stringify(array));
      var payload = {};

      let isValid = "true";
      let message = null;

      for (var i = 0; i < array.length; i++) {
        array[i].seq_num = document.getElementById('seq_num_table' + i).value;
        array[i].plan_header_id = hdrId;
        array[i].installment_type_id = document.getElementById('installment_type_id_table' + i).value;
        array[i].installment_percentage = document.getElementById('installment_percentage_table' + i).value;
        array[i].installment_method_id = document.getElementById('installment_method_id_table' + i).value;
        array[i].due_date = document.getElementById('due_date_table' + i).value;
        array[i].remarks = document.getElementById('remarks_table' + i).value;
        array[i].installment_pay_type = document.getElementById('installment_pay_type_table' + i).value;
        array[i].installment_amount = document.getElementById('installment_amount_table' + i).value;
        array[i].due_days = document.getElementById('due_days_table' + i).value;
        // array[i].installment_type_id = document.getElementById('installment_type_id_table' + i).value;
      }
 
      payload.item = array;


    return {
        'isValid': isValid,
        'message': message,
        'payload': payload
      };

      // console.log("Final TEST==>3" + JSON.stringify(payload));
      // return payload;
    };








    return PageModule;
  });
