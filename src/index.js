const loginForm = document.querySelector("#form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("input:last-child");
const isThereId = localStorage.getItem("userid");

function login(event){
  event.preventDefault();
  const userid = loginInput.value;
  localStorage.setItem("userid",userid);
  loginForm.classList.add("hidden");
  greeting(userid);
}

function greeting(userid){
  const sayhi = document.querySelector("#greeting");
  sayhi.innerHTML = `안녕하슈 ${userid}님`;
}

if(isThereId===null){
    loginForm.addEventListener("submit", login);
    loginForm.classList.remove("hidden");
  }else{
    greeting(isThereId);
  }