var email = document.getElementById("email");
var password = document.getElementById("password");


var inputRequired = document.querySelector(".inputRequired");
var passwordAndEmailAlert = document.querySelector(".passwordAndEmailAlert");


var  userList = [];
if (localStorage.getItem("users") !== null) {
    userList = JSON.parse(localStorage.getItem("users"));}


function signIn() {
    if (checkInputsIsEmpty() == true){
        inputRequired.classList.replace("d-none", "d-flex");
        
    }else{
    if(checkUser() == true){
        window.location.href = "../home.html";
    }else{
        passwordAndEmailAlert.classList.replace("d-none", "d-flex");
    }
    }
}

function checkUser(){
    for (var i = 0; i < userList.length; i++) {
    if(email.value.toLowerCase() == userList[i].email.toLowerCase() &&
        password.value.toLowerCase() == userList[i].password.toLowerCase()){  
        localStorage.setItem("userName", userList[i].name);      
            return true;
        } 
    }
}

function checkInputsIsEmpty(){
    if (email.value == "" || password.value == ""){
        return true;
    }else{
        return false;
    }

        
}


// function clearInputsAndAlert() {
//     email.value = "";
//     password.value = "";
//     inputRequired.classList.replace("d-flex", "d-none");
//     passwordAndEmailAlert.classList.replace("d-flex", "d-none");
// }