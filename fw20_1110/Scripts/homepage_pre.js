import { navbar, footer } from '../components/navbar&footer.js'

// document.getElementById("navbar").innerHTML = navbar()
document.querySelector(".footerv").innerHTML = footer()


let login_status = JSON.parse(localStorage.getItem('login_status'));
let action_status = JSON.parse(localStorage.getItem('action_status'));

let norm = 'norm', regi = 'regi', signin_ = 'signin';
if (login_status === null) {
    login_status = false;
    localStorage.setItem('login_status', JSON.stringify(login_status));
}
if (action_status === null) {
    action_status = norm;
    localStorage.setItem('action_status', JSON.stringify(action_status));
}

if (login_status !== false) {
    // window.location.href = './umers homepage';
}

// functions
let hide = (id) => {
    document.getElementById(id).classList.remove('dis_grid');
    document.getElementById(id).classList.remove('display');
    document.getElementById(id).classList.add('notdisplay');
}
let show_bk = (id) => {
    document.getElementById(id).classList.remove('dis_grid');
    document.getElementById(id).classList.remove('notdisplay');
    document.getElementById(id).classList.add('display');
}
let show_gr = (id) => {
    document.getElementById(id).classList.remove('display');
    document.getElementById(id).classList.remove('notdisplay');
    document.getElementById(id).classList.add('dis_grid');
}

let norm_dis = () => {
    show_bk('buttonhome');
    hide('signin_form');
    hide('divinput')
}
let regi_dis = () => {
    hide('buttonhome');
    hide('signin_form');
    show_bk('divinput')
}
let signin_dis = () => {
    hide('buttonhome');
    show_gr('signin_form');
    hide('divinput')
}
// signin_form, buttonhome, divinput;

if (action_status === norm) {
    norm_dis();

} else if (action_status === regi) {
    regi_dis();
} else if (action_status === signin_) {
    signin_dis();
}

document.querySelector('#logo').addEventListener('click', (event) => {
    action_status = norm;
    localStorage.setItem('action_status', JSON.stringify(action_status));
    norm_dis();
});
document.getElementById('register').addEventListener('click', (event) => {

    regi_dis();
    action_status = norm;
});
document.getElementById('login').addEventListener('click', (event) => {

    signin_dis();
    action_status = norm;
});

// signup/signin functionality

document.querySelector('#regi_button').addEventListener('click', (event) => {

    let email = document.querySelector('#divinput input').value;
    localStorage.setItem('signup_email', JSON.stringify(email));
    document.querySelector('#divinput input').value = '';
    window.location.href = "../fw20_0729/profilePage.html";
})

document.querySelector('#signin_form form').addEventListener('submit', (event) => {
    event.preventDefault();
    let log_in_email = document.getElementById('signin_email').value;
    let log_in_pass = document.getElementById('signin_pass').value;

    console.log(log_in_email, log_in_pass)
});

document.getElementById('cancel_signin').addEventListener('click', () => {
    action_status = norm;
    localStorage.setItem('action_status', JSON.stringify(action_status));
    norm_dis();
})