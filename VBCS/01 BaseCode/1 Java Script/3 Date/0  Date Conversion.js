  PageModule.prototype.convertDate = function(dateValue) {

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var today = new Date(dateValue);
    var d = today.getDate();
    var m = months[today.getMonth()];
    var y = today.getFullYear();
    

    // ("0" + (this.getMonth() + 1)).slice(-2)

    console.log("Date==>"+d);
    console.log("Month==>"+m);
    console.log("Year==>"+y);
    console.log("Month==>>"+getMonthFromString(m));

    var twoDigitYear = y.toString().substr(-2);
    console.log("twoDigitYear==>"+twoDigitYear);

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

   console.log("dd==>"+dd);
   console.log("mm==>"+mm); 
   console.log("yyyy==>"+yyyy);  

    today = yyyy+'-'+mm+'-'+dd;
    return today;
  };


  function getMonthFromString(mon){
   var d = Date.parse(mon + "1, 2012");
   if(!isNaN(d)){
      return new Date(d).getMonth() + 1;
   }
   return -1;
 }
