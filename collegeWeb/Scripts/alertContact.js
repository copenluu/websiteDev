function requiredForm(){
    var emptyEmail = document.forms["ContactForm"]["Email"].value;
    var emptyName = document.forms["ContactForm"]["Name"].value;
    var emptyContent = document.forms["ContactForm"]["ContentArea"].value;
    if (emptyEmail == ""){
        alert("Please fill all fields");
        return false;
    } 
    else if (emptyName == ""){
        alert("Please fill all fields");
        return false;
    }
    else if (emptyContent == ""){
        alert("Please fill all fields");
        return false;
    }
    else{
        alert("Submitted");
        return true;
    }

}

