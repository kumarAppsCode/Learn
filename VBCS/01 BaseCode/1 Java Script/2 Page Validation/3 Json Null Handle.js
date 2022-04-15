  PageModule.prototype.getLoanData = function (jsonObj, requestType, loanType) {
    let amt=0;
    let obj = JSON.stringify(jsonObj);
    let json= JSON.parse(obj);
    // console.log('String=>'+obj);
    // console.log('json=>'+json);
    // console.log('String 2=>'+json.EFFECTIVE_DATE);
    
    // let CAR_SETTLEMENT=json.CAR_LOAN_REPAYMENT;
    // let LIVING_SETTLEMENT=json.LIVING_LOAN_REPAYMENT;
    // let MARRIAGE_SETTLEMENT=json.MARRIAGE_LOAN_REPAYMENT;
    // let HOUSE_MAINTENANCE_LOAN_SETTLEMENT=json.MARRIAGE_LOAN_REPAYMENT;
    // let OTHER_LOAN_SETTLEMENT=json.MARRIAGE_LOAN_REPAYMENT;

    // let CAR_LOAN=json.CAR_LOAN_REPAYMENT;
    // let MARRIAGE_LOAN=json.MARRIAGE_LOAN_REPAYMENT;
    // let LIVING_EXPENSE_LOAN=json.LIVING_LOAN_REPAYMENT;

    if(requestType==="LOAN" && loanType==="CAR_LOAN"){

        amt=json.CAR_LOAN_RECOVERY || 0;

    }else if(requestType==="LOAN" && loanType==="MARRIAGE_LOAN"){
        console.log("Loan - Marriage");
        amt=json.MARRIAGE_LOAN_RECOVERY || 0;
        console.log("==>"+amt);
    }else if(requestType==="LOAN" && loanType==="LIVING_EXPENSE_LOAN"){

        amt=json.LIVING_EXPENSES_RECOVERY || 0;

    }else if(requestType==="SETTLEMENT_LOAN_TYPE" && loanType==="CAR_LOAN"){

        amt=json.CAR_LOAN_REPAYMENT || 0;

    }else if(requestType==="SETTLEMENT_LOAN_TYPE" && loanType==="HOUSE_MAINTENANCE_LOAN"){
        
        amt=json.MARRIAGE_LOAN_REPAYMENT || 0;

    }else if(requestType==="SETTLEMENT_LOAN_TYPE" && loanType==="LIVING_EXPENSES_LOAN"){
        
        amt=json.LIVING_LOAN_REPAYMENT || 0;

    }else if(requestType==="SETTLEMENT_LOAN_TYPE" && loanType==="MARRIAGE_LOAN"){
        
        amt=json.MARRIAGE_LOAN_REPAYMENT || 0;

    }else if(requestType==="SETTLEMENT_LOAN_TYPE" && loanType==="OTHER_LOAN"){
        
        amt=json.MARRIAGE_LOAN_REPAYMENT || 0;

    }else{
        amt=0;
    }
    console.log("Final Out==>"+amt);
    return amt.toString();
    
  };
