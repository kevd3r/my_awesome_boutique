/*---------toggle menu down or up when clicked---------------------*/
let button = document.getElementById('menu-button');
let nav = document.getElementById('hideAndShow');

button.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

/*------------- changes current's page aspect------------- */
let url = window.location.pathname;
let tmp = [];
let table = document.querySelector('div.shown_menu>div>a');
let tables = document.querySelectorAll('div.shown_menu>div>a');
tables.forEach(function(el){
    tmp.push(el.getAttribute('href'));  
});

let indice = 0;
tmp.forEach(function(element){
  if (element == url){
    indice = tmp.indexOf(element);
    tables[indice].parentNode.style.backgroundColor ='#464646';
  }
});

/*------------------data's submitting form displays initials------------------ */
let contactBtn = document.getElementById('contact-button');

contactBtn.addEventListener('click', function affiche(){
  let firstname = document.getElementById('firstname').value;
  let lastname = document.getElementById('lastname').value;
  firstname = firstname.charAt(0).toUpperCase();
  lastname = lastname.charAt(0).toUpperCase();
  let initials= firstname+lastname;
  localStorage.setItem('user',JSON.stringify(initials));
  user = JSON.parse(localStorage.getItem('user'));
  newspan();
  showInitials();
  })
/*----------------- hide form's function if acivated--------*/ 
function newspan(){
  let user= JSON.parse(localStorage.getItem('user'));
  let newspan = document.createElement('span');
  let f = document.querySelector('div.form-container');
    newspan.textContent = 'Bonjour'+' '+user;
    newspan.style.fontFamily = 'Merriweather, serif';
    newspan.style.fontSize = '2rem';
    newspan.style.borderRadius = '50%';
  f.append(newspan);
  let c = document.querySelector('form.contact');
  c.style.display = 'none';
}
/*------------- canvas showing initials normally responsive----------------------*/
function showInitials (){
  let user =JSON.parse(localStorage.getItem('user'));
  if (user!=null){
    let canvas = document.getElementById('canvas');
    let sizeCanvas = canvas.getAttribute('height');
    let vh = window.innerHeight;
    let  resize = parseInt(sizeCanvas);
    let newWidth = Math.floor((resize*vh)/100);
    console.log(newWidth);
    sizeCanvas = newWidth;
    console.log(sizeCanvas);
    let ctx;
    if (canvas.getContext){
      ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(sizeCanvas/2, sizeCanvas/2, sizeCanvas/2, 0, Math.PI*2);
      ctx.fillStyle = "grey";
      ctx.fill();
      const sizeText = sizeCanvas/3;
      ctx.fillStyle = 'orange';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font =`${sizeText}px Arial`;
      ctx.fillText(user, sizeCanvas/2, sizeCanvas/2);
    }else{
    console.log('canevas non supporté');
    }
  }else{
  canvas.style.display= none;
  }
}

/*------------- let initials if present in localstorage----------- */
window.onload=function isStill(){
  let user =JSON.parse(localStorage.getItem('user'));
  if (user!==null){
    showInitials(user);
    isThatU(user);
  }else{
    console.log('failed');
  }
}
/*------------asks about id---------------------------------- */
function isThatU(){
  let user=JSON.parse(localStorage.getItem('user'));
  let formTitle = document.getElementById('form-title');
  formTitle.innerText=`Est-ce vous ${user}?`
}