const slider = document.querySelector('.slider'),
    active = document.querySelector('#active'),
    line1 = document.querySelector('#liner1'),
    line2 = document.querySelector('#liner2'),
    line3 = document.querySelector('#liner3'),
    line4 = document.querySelector('#liner4'),
    container = document.querySelector('.container');




line1.addEventListener('click', function () {
    slider.style.transform = 'translateX(0)';
    active.style.top = 0;
});
line2.addEventListener('click', function () {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '80px';
    container.style.backgraund = "yellow"
});
line3.addEventListener('click', function () {
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '160px';
    container.style.backgraund = ""
});
line4.addEventListener('click', function () {
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '240px';
    container.style.backgraund = ""
});