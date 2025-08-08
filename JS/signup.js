var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("login");

var userList;
if(localStorage.getItem("users") == null){
    userList = [];
}else{
    userList = JSON.parse(localStorage.getItem("users"));
}
function signUp(){
    clearAlerts()
    
    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === ""){
    var rquiredInputs = document.querySelector(".rquiredInputs");
    rquiredInputs.classList.replace("d-none", "d-flex");
    return;}
    isExist();
    if(validation() == true && isExist() == false){
    var user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    userList.push(user);
    localStorage.setItem("users", JSON.stringify(userList))
    var successMsg = document.querySelector(".successMsg");
    successMsg.classList.replace("d-none", "d-flex");
}else{
    var faildMsg = document.querySelector(".faildMsg");
    faildMsg.classList.replace("d-none", "d-flex");
}
}



function nameValidation(){
    var regex = /^[A-Z][a-z]{2,}(?:\s[A-Za-z]{2,})*$/;
    var nameAlert = document.querySelector(".nameAlert");
    if (regex.test(nameInput.value) == true && nameInput.value !==""){
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        nameAlert.classList.replace("d-flex", "d-none")
        return true;
    }else{
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
        nameAlert.classList.replace("d-none", "d-flex");
        return false;
    }
}
function emailValidation(){
    var emailAlert = document.querySelector(".emailAlert");
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(emailRegex.test(emailInput.value)== true && emailInput.value !== ""){
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        emailAlert.classList.replace("d-flex", "d-none")
        return true;
    }else{
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        emailAlert.classList.replace("d-none", "d-flex");
        return false;
    }
}
function passwordValidation(){
    var passwordAlert = document.querySelector(".passwordAlert");
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(passwordRegex.test(passwordInput.value) == true && passwordInput.value !== ""){
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        passwordAlert.classList.replace("d-flex", "d-none")
        return true;
    }else{
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        passwordAlert.classList.replace("d-none", "d-flex");
        return false;
    }
}
function validation(){
    if (nameValidation() == true&&
        emailValidation() == true&&
        passwordValidation() == true){
        return true;
    }else{
        return false;
    }
}

function isExist(){
    var existEmail = document.querySelector(".existEmail");
    for (var i = 0 ; i < userList.length ; i++){
        if (emailInput.value.toLowerCase() == userList[i].email.toLowerCase()){
            existEmail.classList.replace("d-none", "d-flex");
            emailInput.classList.remove("is-valid");
            emailInput.classList.add("is-invalid");
            return true;
        }
    }
            
            return false;
        }
function clearAlerts() {
    document.querySelector(".successMsg").classList.replace("d-flex", "d-none");
    document.querySelector(".faildMsg").classList.replace("d-flex", "d-none");
    document.querySelector(".existEmail").classList.replace("d-flex", "d-none");
    document.querySelector(".rquiredInputs").classList.replace("d-flex", "d-none");
}