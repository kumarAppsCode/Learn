person instanceof Object ===> tell Refernces type of Objects
=======================================================================
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var person= new Object();
        console.log(person instanceof Object);
        person.name ="Dinesh";
        person.job="ADF";
        // name/job==property
        console.log(person.name);
        console.log(person.job);
        //property can call function name
        // method 
        person.saiHi=function(){
            console.log("Hi "+ person.name);
        }
        person.saiHi();
        // property and method can be group in objects
    </script>

</head>
<body>
    
</body>
</html>
