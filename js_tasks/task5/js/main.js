document.getElementById("inputRadius").onchange("change",findMostCommon());
function findMostCommon()
    {   
        
        var radius = document.getElementById("inputRadius").value;
        console.log(radius);
        
        var result = 4/3*3.14*(radius*radius*radius);
        
        console.log(result);
        document.getElementById("resultField").value = result;
        
    }
