let button = document.getElementById('menu-button');
let img = document.getElementById('burger').src;

button.addEventListener('click', ()=>{
    if ('click' && img.src=="icons/page_style_icons/menu.svg"){
        console.log('match');
        img.src="icons/page_style_icons/x-lg.svg";
    }else if ('click' && img.src=="icons/page_style_icons/x-lg.svg"){
        console.log('rematch');
        img.src="icons/page_style_icons/menu.svg";
    }else{
        console.log('failed');
    }
});


