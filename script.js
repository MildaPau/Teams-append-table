"use strict"

var inputVardas = document.getElementsByTagName("input")[0];
var inputPavarde = document.getElementsByTagName("input")[1];
var inputMetai = document.getElementsByTagName("input")[2];

var btnPrideti = document.getElementsByTagName("button")[0];
var btnIstrinti1 = document.getElementsByTagName("button")[1];
var btnIstrinti2 = document.getElementsByTagName("button")[2];

var table = document.getElementsByTagName("table")[0];
var tr = document.getElementsByTagName("tr");


btnPrideti.addEventListener("click", function(){
        if(inputVardas.value == '' || inputPavarde.value == '' || inputMetai.value == ''){
            alert("Įveskite duomenis!");
        } else if (inputMetai.value <= 0){
            alert("Įvestas skaičius turi būti didesnis už 0.");
        }else {

        var newName = document.createElement("tr");
        newName.innerHTML = `<td>${inputVardas.value}</td><td>${inputPavarde.value}</td><td>${inputMetai.value}</td>`;
        table.append(newName);

        inputVardas.value = "";
        inputPavarde.value = "";
        inputMetai.value = "";

        }
})

    btnIstrinti1.addEventListener("click", function(){
                if(tr.length == 0){
                    alert("Nėra ką trinti!");
                } else {
                    tr[0].remove();
                }
            })

            btnIstrinti2.addEventListener("click", function(){
                    if(tr.length == 0){
                    alert("Nėra ką trinti!");
                } else{
                    tr[tr.length - 1].remove();
                }
    })


            