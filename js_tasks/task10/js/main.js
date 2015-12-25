window.onload = function(){
    var selectValue = document.getElementById("selectCountry");
    selectValue.onchange = function(){
        if(this.value == "Other"){
            document.getElementById("otherSelect").style.display ='block';
        }else{
            document.getElementById("otherSelect").style.display ='none';
        }
    }
    
    var allInputs = document.getElementsByClassName("registerInput");
    var allErrorLabels = document.getElementsByClassName("errorMessage");
    console.log(allInputs);
    
  
    var mainDiv = document.getElementById("registerForm");
    
    mainDiv.onclick = function(){
        for(var i =0; i< allInputs.length; i++){
            changeColor(allInputs[i]);
            
        }         
    }
        
    }
    

var changeColor = function(input){
        if(input.value==""){
            input.style.background = "red";
        }else{
            input.style.background = "#94fb92";
        }
    
    
}


        
