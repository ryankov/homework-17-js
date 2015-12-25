function Converter(){
    
    var firstSelect = document.getElementById("firstOption");
    var valueOfSelect = firstSelect.options[firstSelect.selectedIndex].value;
    
    var secondSelect = document.getElementById("secondOption");
    var valueOfSelect2 = secondSelect.options[secondSelect.selectedIndex].value;
    
    var valueToConvert = document.getElementById("convertPayload").value;

    if(valueOfSelect =="kg" & valueOfSelect2 == "lb"){
        document.getElementById("result").innerHTML = valueToConvert*2.20462262;
        return;
    }
    
    if(valueOfSelect =="lb" & valueOfSelect2 == "kg"){
        document.getElementById("result").innerHTML = valueToConvert*0.45359237;
        return;
    }
    if(valueOfSelect == valueOfSelect2){
        document.getElementById("result").innerHTML = valueToConvert;
        return;
    }
}
