/*---------toggle menu down or up when clicked---------------------*/
let button = document.getElementById('menu-button');
let nav = document.getElementById('hideAndShow');

button.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

/*------------- changes current's page aspect------------- */
let url = window.location.pathname;
console.log(url);
let tmp = [];
let table = document.querySelector('div.shown_menu>div>a');
let tables = document.querySelectorAll('div.shown_menu>div>a');
console.log(table);
console.log(tables);
tables.forEach(function(el){
    console.log(el);
    tmp.push(el.getAttribute('href'));  
});

let indice = 0;
tmp.forEach(function(element){
  if (element == url){
    console.log(element);
    indice = tmp.indexOf(element);
    console.log(tmp.indexOf(element));
    console.log(tables[indice]);
    tables[indice].parentNode.style.backgroundColor ='#464646';
  }
});

/*------------------data's submitting form------------------- */
var initials;
function afficher(){
  let firstname = document.getElementById('firstname').value;
  let lastname = document.getElementById('lastname').value;
  let tmp2=[firstname, lastname];
  console.log(tmp2);
  firstname = firstname.charAt(0).toUpperCase();
  lastname = lastname.charAt(0).toUpperCase();
  let newspan = document.createElement('span');
  let f = document.querySelector('div.form-container');
    newspan.textContent = 'Bonjour'+' '+firstname+ ' ' +lastname;
    newspan.style.fontFamily = 'Merriweather, serif';
    newspan.style.fontSize = '2rem';
    newspan.style.borderRadius = '50%';
  f.append(newspan);
  let c = document.querySelector('form.contact');
  c.style.display = 'none';
  initials = firstname+lastname;
}
console.log(initials);
const canvas = document.getElementById('contact_initials');
let sizeCanvas = canvas.getAttribute('width')
let ctx;
if (canvas.getContext){
  ctx = canvas.getContext('2d');
  console.log(sizeCanvas);
  ctx.beginPath();
  ctx.arc(600, 500, sizeCanvas/2, 0, Math.PI*2);
  ctx.stroke();
  const sizeText = sizeCanvas/3;
  ctx.fillStyle = 'cadetblue';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font =`${sizeText}vh Arial`;
  ctx.fillText('FF', sizeCanvas/2, sizeCanvas/2);
}else{
  console.log('canevas non supporté');
}
