/*--------------- CHANGE BACKGROUND HEADER ---------------*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)



/*--------------- SERVICES MODAL ---------------*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalButtons = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.fa-xmark');

        
let modal = function(modalClick){
    modalViews[modalClick].classList.add('services_modal-active');
}

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        modal(i);
    });
});

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('services_modal-active');
        })
    });
});





/*--------------- MIXITUP FILTER PORTFOLIO ---------------*/


/* Link active work */ 


/*--------------- SWIPER TESTIMONIAL ---------------*/


/*--------------- SCROLL SECTIONS ACTIVE LINK ---------------*/


/*--------------- LIGHT DARK THEME ---------------*/ 


/*--------------- SCROLL REVEAL ANIMATION ---------------*/
