<!DOCTYPE html>
<html>
<head>
<style>
.buttonA {
  display: inline-block;
  padding: 6px 25px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 40px;
  box-shadow: 0 5px #999;
}

.buttonA:hover {background-color: #3e8e41}

.buttonA:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.buttonR {
  display: inline-block;
  padding: 6px 35px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: red;
  border: none;
  border-radius: 40px;
  box-shadow: 0 5px #999;
}

.buttonR:hover {background-color: red}

.buttonR:active {
  background-color: red;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>  
<script type="text/javascript">

function getData(){

 var dataBody={
  empName: "Nithiya",
  gender: "Females",
  emp_type: "Tempory",
  email: "Priya.lee@gmail.com",
  mobile: "+9842012345",
  grade: "G1",
  designation: "Manager",
  work_location: "India",
  address: "USA",
  salary: "500"
};
console.log("==>"+JSON.stringify(dataBody));
  loadDoc(dataBody);        
}

function loadDoc(dataBody) {
// window.alert('Hi');
 console.log("Load method==>"+dataBody);
 $(document).ready(function() {
  // 
  $.ajax({
    type: 'POST',
    url: 'https://oaosoatst.oandoplc.com/TravelRequestV2/employees/create',
    crossDomain : true,
    dataType: "json",
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json'
  
    },
    data:JSON.stringify(dataBody),
    success:function(response){
      console.log("Result==>"+response);
      console.log("Result 2==>"+JSON.stringify(response));
      console.log("Result 3==>:"+response.emp_no);
      console.log("Result 4==>"+response.gender)
        if(response.gender=="Female"){
          document.getElementById("myAPR").style.display="block";
        }else{
          document.getElementById("myREJ").style.display="block";
        }
    },
    error:function(err){
      console.log(err);
    }
  })
 }) 
}



</script>

</head>
<body style="background-color: linen">

<p>&nbsp;</p>
<table class="paleBlueRows" style="height: 218px;" width="100%">
<thead>
<tr style="background-color: #120101">
<td colspan="2" align="center">
<h3 style="color: white;">Submitted for the Approval</h3>
</td>
</tr>
</thead>
<tbody>
<tr>
<td style="width: 610px;">
<p>Dear Customer,</p>
<p>Good Day..!</p>
<p>Cancellation Request has generated and assigned to you for the approval. Kindly&nbsp;take necessary action on below request.</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table border="1" width="100%" cellspacing="2" cellpadding="3" align="center">
<tbody>
<tr style="background-color: #120101; height: 18px;">
<td style="height: 18px;;" colspan="2" align="center">
<h3 style="color: white;">Request Details</h3>
</td>
</tr>
<tr style="height: 18px;">
<th style="height: 18px;">&nbsp;'||trip_type||'</th>
<td style="height: 18px;" width="50%">'||trip_type||'</td>
</tbody>
</table>
<p>&nbsp;</p>

<table class="paleBlueRows" style="height: 100%;" width="100%">
<thead>
<tr>
<td style="height: 18px;" width="50%" colspan="2" align="center">
<input class="buttonA" type="button" onclick="getData()" value="Approve">
<input class="buttonR" type="button" onclick="getData()" value="Reject">
</td>
</tr>
</thead>
</table>

<div id="myAPR" style="display:none">
	This is my APR element.
</div>
<div id="myREJ" style="display:none">
    This is my REJ element.
</div>
<div id="myPEN" style="display:none">
    Record Approved and submited to next level.
</div>
<p>&nbsp;</p>
<p>&nbsp;</p>
<table border="1" width="100%" cellspacing="2" cellpadding="3" align="center">
<tbody>
<tr style="background-color: #120101;">
<td colspan="4" align="center">
<h3 style="color: white;">Approval History</h3>
</td>
</tr>
<tr>
<td style="font-weight: bold;">'||assignee||'</td>
<td style="color: blue;">'||req_status||'</td>
<td>'||submitted_on||'</td>
<td>'||approved_on||'</td>
</tr>
</tbody>
</table>

<table style="width:100%;">
<tfoot>
<tr>
<td style="background: #d0e4f5; border-top: 2px solid #444444; width: 100%;">
<p style="font-weight: bold;">Regards,</p>
<p style="font-weight: bold;">PRISM Administrator Team.</p>
</td>
</tr>
</tfoot>
</table>


</body>
</html>
