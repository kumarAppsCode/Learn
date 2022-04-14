  PageModule.prototype.validateJsonData = function(jsonObj) {

    let obj = JSON.stringify(jsonObj);
    let json= JSON.parse(obj);
    console.log("Json-->objValidattion==>"+obj);
    console.log('request_type=>'+json.request_type);
    console.log('ldata=>'+json.ldata.per_date);
    console.log('ldata=>'+json.ldata.fromhours);
    return {
        'isValid':true,
        'message':'Data Error'
    };
    // $chain.results.callFunctionValidateJsonData.isValid + "-" + $chain.results.callFunctionValidateJsonData.message
  };
