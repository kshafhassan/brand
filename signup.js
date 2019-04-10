function formValidation() {
    var email = document.signup.email;
    var pass = document.signup.password;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (re.test(pass)) {

    }
    else {
        document.getElementById("messs").innerHTML = " // at least one number, one lowercase and one uppercase letter at least six characters "
        return false;
    }
}

}