function formValidation(){
    let email = document.forms["theForm"]["email"].value;
    if (email == ""){
        alert("Please enter an email");
        return false;
    }   
}