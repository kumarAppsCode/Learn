<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        
        var obj1=new Object(); // object constructor
        obj1.name="Dinesh";
        obj1.job="ADF";
        obj1.work=function(){
            console.log("Mesg"+obj1.name);
        }

        // Object literal syntax 
        var obj2={
            name: "Kumar",
            job: "SOa",
            work: function () {
                // console.log("Mesg"+ obj2.name);
                console.log("Mesg"+ this.name);
            }
        }
// ------------------------
        // loop acess for in
        for (const key in obj2) {
            console.log("==>"+obj2[key]);
            // if (Object.hasOwnProperty.call(obj2, key)) {
            //     const element = obj2[key];
            //     console.log("==>"+element)
            // }
        }

    </script>


</head>
<body>
    
</body>
</html>
