function formValidation() {
    var email = document.login.email;
    var pass = document.login.password;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
    if (pass.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        pass.focus();
        return false;
    }


}