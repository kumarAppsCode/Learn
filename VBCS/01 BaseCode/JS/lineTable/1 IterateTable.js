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
