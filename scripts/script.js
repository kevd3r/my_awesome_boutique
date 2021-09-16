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

  let firstname = document.getElementById('firstname').value;
  let lastname = document.getElementById('lastname').value;
  console.log(firstname.value);
