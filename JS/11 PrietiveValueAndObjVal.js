<!-- Primetive value VS Object value -->
<!-- Primetive value : fixed value-->
<!-- Object value: can't be fixed value(property value and method we can add)-->
<!-- Stack : primetive-->
<!-- Heap Object-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var num1=10;
        var num2=num1;
//------------------------------------ 
        var object1=new Object();
        var object2=object1;
//------------------------------------ 
        num2=20;
        object2.ref="SOA";
        console.log("****Stack*********");
        console.log("num 1", num1);
        console.log("num 2", num2);
        console.log("****Heap*********");
        console.log("Obj1", object1);
        console.log("Obj2", object2);
    </script>



</head>
<body>
    
</body>
</html>
