<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <Script>
        var month=prompt("Enter the month in Number(Range 1 to 12)", 6);
        
        for(var days=1; days<=31;days++){
            if((month==4||month==6||month==9||month==11) && days==31) continue;
            console.log("Days"+ days);
            if((month==2)&& days==28) break;
        }
    </Script>   


</head>
<body>
    Break and Continue
</body>
</html>
