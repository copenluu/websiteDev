function checkformEmpty(){
    console.log("ss")
    var emailEnter = document.getElementById("emailInput");
    if(emailEnter.hasAttribute("required") && emailEnter.length == ""){
        console.log("lol")
        alert();
    }
}