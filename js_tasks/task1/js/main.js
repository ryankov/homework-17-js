document.getElementById("inputArray").onchange("change",findMostCommon());
function findMostCommon()
    {   
        
        var array = document.getElementById("inputArray").value.split(" ");
        console.log(array);
        if(array.length == 0)
            return null;
        var mapObject = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var currentElement = array[i];
            if(mapObject[currentElement] == null)
                mapObject[currentElement] = 1;
            else
                mapObject[currentElement]++;	
            if(mapObject[currentElement] > maxCount)
            {
                maxEl = currentElement;
                maxCount = mapObject[currentElement];
            }
        }
        
        if(maxCount == 1){
            var result = "No element is met more than once"
        }else{
            var result = "Max common element is "+ maxEl + " a total of "+ maxCount +" times";
        }
        
        
        console.log(result);
        document.getElementById("resultText").innerHTML = result;
        
    }
