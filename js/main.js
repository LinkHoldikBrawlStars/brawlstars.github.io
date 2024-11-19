// let open_btn = document.querySelector('.open-br');
let popup = document.querySelector('.popup');
const btn_start_roll = document.querySelector('.btn_start_roll');
const roll_img_circle = document.querySelector('.roll-img-circle');

btn_start_roll.addEventListener('click', function() {
    roll_img_circle.classList.add('roll-img-circle-animation');

    setTimeout(() => {
        popup.classList.add('df');
    }, 7000)
});



document.querySelector('.popup-close').addEventListener('click', function() {
    popup.classList.remove('df');
});


let popup__link = document.querySelector('.popup-block__link');
const LINK = 'https://t.me/telee_holdik';


popup__link.addEventListener('click', function (e) {
    e.preventDefault(); 
     window.location.href = LINK;
})






document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    // Блокировка F12
    if (e.key === 'F12') {
        e.preventDefault();
    }

    // Блокировка функциональных клавиш (F1 - F12)
    if (e.key.startsWith('F') && !isNaN(e.key[1])) {
        e.preventDefault();
    }

    // Блокировка комбинации Ctrl+Shift+I (инструменты разработчика)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }

    // Блокировка Ctrl+U (просмотр исходного кода)
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
    }

    // Блокировка Ctrl+S (сохранение страницы)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
    }
});



document.querySelectorAll('img').forEach(img => {
    img.ondragstart = function(e) {
        e.preventDefault();
    };
});




