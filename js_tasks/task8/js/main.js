function addRow(){
    
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = "Obi";
    cell2.innerHTML = "Wan";
    cell3.innerHTML = "Kenobi";
}
