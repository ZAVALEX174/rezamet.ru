
const btnUp = document.querySelector('.sidebar__btn-up');
const btnUpWrap = document.querySelector('.sidebar');
window.addEventListener('scroll', trackScroll);
btnUp.addEventListener('click', goUp);
console.log(btnUp);

function trackScroll() {
    // вычисляем положение от верхушки страницы
    const scrolled = window.scrollY;
    // console.log(scrolled)
    // считаем высоту окна браузера
    const coords = document.documentElement.clientHeight;
    // console.log(coords)
    // если вышли за пределы первого окна
    if (scrolled > coords) {
        // кнопка появляется
        btnUpWrap.classList.add("sidebar__show");
    } else {
        // иначе исчезает
        btnUpWrap.classList.remove("sidebar__show");
    }
}

function goUp() {
    // пока не вернулись в начало страницы
    if (window.scrollY > 0) {
        // скроллим наверх
        window.scrollBy(0, -9); // второй аргумент - скорость
        setTimeout(goUp, 0); // входим в рекурсию
    }
}