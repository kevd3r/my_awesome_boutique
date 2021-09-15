let button = document.getElementById('menu-button');
let nav = document.getElementById('hideAndShow');

button.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});


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
console.log(tmp);





Array.from(table);
console.log(table[1]);



/*
function currentPage(){
for (let value of item){
    if (value == url){
        /*parentNode.item[i].style.background-color="pink";
        console.log(value);
    }
}
}
jQuery(function($){
    console.log('jQuery est inclus! hosanna !!')
    
});*/