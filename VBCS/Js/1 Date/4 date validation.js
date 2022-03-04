    PageModule.prototype.validateDate = function(dateValue) {
        let dateLength=dateValue.length;
        window.alert(dateLength);
        console.log('Date Length==>>'+dateLength);
        if(dateLength==10){
          dateValue=dateValue+'T00:00:00Z';
          console.log('Date Length 10==>>'+dateValue);
        }else{
          dateValue=dateValue;
          console.log('Date Length 10==>>'+dateValue);
        }
        return dateValue;
    };
