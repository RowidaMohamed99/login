var welcome = document.querySelector(".welcome");
var btn = document.querySelector(".btn");

if (localStorage.getItem("userName") !== null){
    welcome.innerHTML = "Welcome " + localStorage.getItem("userName") ;
} 

function logout() {
    localStorage.removeItem("userName");
    window.location.href = "../index.html"
}