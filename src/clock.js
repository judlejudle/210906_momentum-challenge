const clock = document.querySelector("#clock");

function getTime(){
  const today = new Date().getTime();
  const hours = String(new Date().getHours()).padStart(2,"0");
  const minutes = String(new Date().getMinutes()).padStart(2,"0");
  const seconds = String(new Date().getSeconds()).padStart(2,"0");
  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
getTime();
setInterval(getTime, 1000);
