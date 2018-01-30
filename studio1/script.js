//JS of Studio 1
"use strict";

console.log("reading");

//captures the submit event
document.f.onsubmit = processForm;
//captures the reset event
//document.f.onreset = resetForm;


//intialize to get text input
var results = document.getElementById("results");
var myMsg = document.getElementById("myMsg");


//define the process function
function processForm() {
    myMsg.setAttribute('class', 'show');
    results.setAttribute('class', 'show');

    //store fields in variables
   // var userName = document.f.userName.value;
    var adj = document.f.adj.value;
    var noun1 = document.f.noun1.value;
    var tea = document.f.tea.value;
    var num1 = document.f.num1.value;
    var num2 = document.f.num2.value;
    var verb = document.f.verb.value;
    var noun2 = document.f.noun2.value;
    
    document.getElementById("myMsg").innerHTML;

    // My message
    myMsg.innerHTML = "Boil," + tea + " leaves <br>"
        +"Add" + num1 + "% sugar  <br>"
        +"Add" + num2 + "% ice <br>"
        +"Shake and " + verb + "around! <br>"
        +"Add" + noun2 + " and boba <br>"
        +"Serve and sip on your " + adj + noun1;

    //prevent page from reloading
    return false;
}

 /*set the hide the message and the image
function resetForm() {
    myMsg.innerHTML = "";
    myMsg.setAttribute('class', 'hide');
    results.setAttribute('class', 'hide');

} */