let register = document.querySelector(".auth-form__register");
let login = document.querySelector(".auth-form__login");
let button1 = document.querySelector(".btn-login");
let button2 = document.querySelector(".btn-register");
let button3 = document.querySelectorAll(".btn-normal");
let modal = document.querySelector(".modal");
let a = document.querySelector('.nav--link-register');
let b = document.querySelector('.nav--link-login');
let check = false;
a.onclick = function () {
    modal.classList.add('show');
    modal.classList.remove('hidden');
    modal.classList.remove('hide-modal');
    register.classList.add('show-modal');
    register.classList.remove('hide-modal');
    login.classList.add('hide-modal');
    login.classList.remove('show-modal');
}

b.onclick = function () {
    modal.classList.add('show');
    modal.classList.remove('hidden');
    modal.classList.remove('hide-modal');
    register.classList.add('hide-modal');
    register.classList.remove('show-modal');
    login.classList.add('show-modal');
    login.classList.remove('hide-modal');
}

button1.onclick = function () {
    register.classList.add('hide-modal');
    register.classList.remove('show-modal');
    login.classList.add('show-modal');
    login.classList.remove('hide-modal');
}
button2.onclick = function () {
    register.classList.add('show-modal');
    register.classList.remove('hide-modal');
    login.classList.add('hide-modal');
    login.classList.remove('show-modal');
}
for (let i = 0; i < button3.length; i++) {
    button3[i].onclick = function () {
        if (check == false) {
            modal.classList.add('hide-modal');
            modal.classList.remove("show")
        }
    }
}


// Pagination

let c = document.querySelector('.pagination-item__btn-prev');
let d = document.querySelector('.pagination-item__btn-next');
let k = document.querySelectorAll('.pagination-item');
let h1 = document.querySelectorAll('.pagination-item')[1].innerText;
let h2 = document.querySelectorAll('.pagination-item')[2].innerText;

for(let i = 0; i<k.length; i++){
    if(k[i].innerText >= 1){
        d.onclick = function(){
            k[i].classList.add("pagination-item__active");
        }
    }
}