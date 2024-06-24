const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});



