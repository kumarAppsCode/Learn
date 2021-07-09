
function loadDoc(dataBody) {
 window.alert('Hi');
 console.log("Load method==>"+dataBody);
 $(document).ready(function() {
  // 
  $.ajax({
    type: 'POST',
    url: 'https://oaosoatst.oandoplc.com/TravelRequestV2/employees/create',
    crossDomain : true,
    dataType: "json",
    // contentType: "application/json; charset=utf-8",
    headers: {
      // "Access-Control-Allow-Origin":  "https://oaosoatst.oandoplc.com/",
      // "Access-Control-Allow-Methods": "POST",
      // "Access-Control-Allow-Headers":" Content-Type, Authorization"
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
    
    },
    error:function(err){
      console.log(err);
    }
  })


 }) 
}





function getData(){

 var dataBody={
  empName: "Nithiya",
  gender: "Female",
  emp_type: "Tempory",
  email: "Priya.lee@gmail.com",
  mobile: "+9842012345",
  grade: "G1",
  designation: "Manager",
  work_location: "India",
  address: "USA",
  salary: "500"
};

// var dataBody=
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// };


console.log("==>"+JSON.stringify(dataBody));
  loadDoc(dataBody);        
}


// function loadDoc() {
//     window.alert('Hi');
//  fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//         title: 'foo2',
//         body: 'bar2',
//         userId: 2,
//         }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
// //   .then((json) => console.log(json));
//   .then(function(json){
//     console.log(json);
//     console.log("Id  :"+json.id);
//     console.log("Title:"+json.title)
// })
// }
