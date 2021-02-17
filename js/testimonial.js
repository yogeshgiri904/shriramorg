
// js for testimonials

const prev = document.getElementById('prev');
const next = document.getElementById('next');
let slider = document.querySelector('.slider');
let slideIndex = 0;

prev.addEventListener('click',() =>{
    slideIndex = (slideIndex - 1 + 5) % 5;
    slider.style.transform = 'translate('+ ( slideIndex ) * -20 +'%)';
    slider.style.animation = 'none';        
});

next.addEventListener('click',() =>{
    slideIndex = (slideIndex + 1) % 5;
    slider.style.transform = 'translate('+ ( slideIndex ) * -20 +'%)';
    slider.style.animation = 'none';        

});