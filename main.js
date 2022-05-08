
//RELOJ DIGITAL

setInterval(() => {
  //Variables
  var hours = document.getElementById('hours');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  var ampm = document.getElementById('ampm');
  
  var hh =document.getElementById('hh');
  var mm =document.getElementById('mm');
  var ss =document.getElementById('ss');
  
  var hr_dot = document.querySelector('.hr_dot');
  var min_dot = document.querySelector('.min_dot');
  var sec_dot = document.querySelector('.sec_dot');

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var am = h >= 12 ? "PM" : "AM" ;

  //Siempre 2 digitos

  h = (h < 10) ? "0" + h : h ;
  m = (m < 10) ? "0" + m : m ;
  s = (s < 10) ? "0" + s : s ;

  hours.innerHTML = h + " <br><span>Hours</span>";
  minutes.innerHTML = m + " <br><span>Minutes</span>";
  seconds.innerHTML = s + " <br><span>Seconds</span>";
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12 ;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60 ;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60 ;


  //DE 24 A 12 hs

  if (h > 12){
      h = h - 12 ;
  }

  hr_dot.style.transform = `rotate(${h * 30}deg)` ;

  min_dot.style.transform = `rotate(${m * 6}deg)` ;
      
  sec_dot.style.transform = `rotate(${s * 6}deg)` ;
  
  
})

//MODO DARK - LIGHT

var input = document.getElementById('input');
var body = document.getElementById('body');
var circulo1 = document.getElementById('circle1');
var circulo2 = document.getElementById('circle2');
var circulo3 = document.getElementById('circle3');
var logos = document.getElementById('logo');

input.addEventListener("change", validaCheckbox, false);

function validaCheckbox()
{
  var checked = input.checked;
  if(checked){
    body.classList.remove('dark');
    body.classList.add('light');
    body.style.color = 'black';
    logos.style.color = '#333';
    logos.style.backgroundColor = 'transparent';
    circulo1.setAttribute("style","--clr:var(--rojo-light)");
    circulo2.setAttribute("style","--clr:var(--amarillo-light)");
    circulo3.setAttribute("style","--clr:var(--verde-light)");
  }
  else{
    body.classList.remove('light');
    body.classList.add('dark');
    body.style.color = 'white';
    logos.style.color = 'white';
    logos.style.backgroundColor = '#333';
    circulo1.setAttribute("style","--clr:var(--rojo-dark)");
    circulo2.setAttribute("style","--clr:var(--amarillo-dark)");
    circulo3.setAttribute("style","--clr:var(--verde-dark)");
  }
}

