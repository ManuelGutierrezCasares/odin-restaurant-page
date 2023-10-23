import * as bootstrap from 'bootstrap';
import './scss/style.scss';
import home from './home';
import menu from './menu';
import contact from './contact';

console.log('starting app...');
const gotoHome = document.getElementById('goto-home');
const gotoMenu = document.getElementById('goto-menu');
const gotoContact = document.getElementById('goto-contact');
const content = document.getElementById('content');


home();

gotoHome.addEventListener('click',function (e){
    if (gotoMenu.classList.contains('active')){
        gotoMenu.classList.remove('active');
    } else if (gotoContact.classList.contains('active')){
        gotoContact.classList.remove('active');
    }

    content.classList.add('bg-light');
    content.replaceChildren();
    gotoHome.classList.add('active');
    
        
    home();
});

gotoMenu.addEventListener('click',function (e){
    
    if (gotoHome.classList.contains('active')){
        gotoHome.classList.remove('active');
    } else if (gotoContact.classList.contains('active')){
        gotoContact.classList.remove('active');
    }

    content.replaceChildren();
    content.classList.remove('bg-light');
    gotoMenu.classList.add('active');
    
    menu();

});

gotoContact.addEventListener('click', function (e){
    if (gotoHome.classList.contains('active')){
        gotoHome.classList.remove('active');
    } else if (gotoMenu.classList.contains('active')){
        gotoMenu.classList.remove('active');
    }

    content.replaceChildren();
    content.classList.remove('bg-light');
    gotoContact.classList.add('active');

    contact();

});










