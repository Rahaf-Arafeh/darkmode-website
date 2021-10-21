let darkMode=document.getElementById("dark-mode-toggle");
let home=document.querySelector("#home");

darkMode.onclick=function() {
  document.body.classList.toggle("darkmode");
  if(document.body.classList.contains("darkmode")){
    darkMode.style.color='white';
    home.style.background='rgba(0,0,0,0.6)';
  }else{
    darkMode.style.color='black';
    home.style.background='rgba(0,0,0,0)';
  }
}

