let button = document.getElementById('menu-button');
let nav = document.getElementById('hideAndShow');

button.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});
