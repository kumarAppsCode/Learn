  PageModule.prototype.validateJsonData = function(jsonObj) {

    let obj = JSON.stringify(jsonObj);
    let json= JSON.parse(obj);
    // console.log("Json-->objValidattion==>"+obj);
    // console.log('request_type=>'+json.request_type);
    // console.log('ldata=>'+json.ldata.per_date);
    // console.log('ldata=>'+json.ldata.fromhours);

    if(json.request_type==="ADJUST_MISSING_DAYS"){
        return   PageModule.prototype.validateAdjustmentMissing(jsonObj);
    }else if(json.request_type==="ABC"){
         return {
            'isValid':true,
            'message':'NONE'
        };  
    }else{
          return {
            'isValid':true,
            'message':'NONE'
        };  
    }    
    

  };


  PageModule.prototype.validateAdjustmentMissing = function(jsonObj) {
    let obj = JSON.stringify(jsonObj);
    let json= JSON.parse(obj);
    let isValid=false;
    let message=null;
    // console.log('request_type=>'+json.request_type);
    // console.log('ldata=>'+json.ldata.per_date);
    // console.log('adjust_miss_comments=>'+json.ldata.adjust_miss_comments);
    // console.log('adjust_miss_enddate=>'+json.ldata.adjust_miss_enddate);
    // console.log('adjust_miss_startdate=>'+json.ldata.adjust_miss_startdate);
    // console.log('request_type=>'+json.ldata.request_type);

      if(typeof(json.ldata.adjust_miss_comments) !== "undefined" && json.ldata.adjust_miss_comments !== null ){
          if(typeof(json.ldata.adjust_miss_enddate) !== "undefined" && json.ldata.adjust_miss_enddate !== null){
              if(typeof(json.ldata.adjust_miss_startdate) !== "undefined" && json.ldata.adjust_miss_startdate !== null){
                  isValid=true;
                  message='';
              }else{
                isValid=false;
                message='Please Enter Start Date';
              }
          }else{
              isValid=false;
              message='Please Enter End Date';
          }  
      }else{
        isValid=false;
        message='Please Enter Adjustment Missing Comment';
      }

    return {
        'isValid':isValid,
        'message':message
    };
    // $chain.results.callFunctionValidateJsonData.isValid + "-" + $chain.results.callFunctionValidateJsonData.message
  };
