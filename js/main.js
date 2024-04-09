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
``


/*--------------- MIXITUP FILTER PORTFOLIO ---------------*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 500,
        easing: 'ease-out' // Change the easing to 'ease-out'
    }
});

/* Link active work */ 
const linkwork = document.querySelectorAll('.work__item');

function activeWork(){
        linkwork.forEach(j => j.classList.remove('active-work'));
        this.classList.add('active-work');
}

// Add event listener to each linkwork element to activate the activeWork function on click
linkwork.forEach(j => j.addEventListener('click', activeWork));


/*--------------- SWIPER TESTIMONIAL ---------------*/
/* Initialize Swiper */
let swiperTestimonial = new Swiper(".testimonial_container", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
          
          spaceBetween: 28,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        /*1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },*/
    },
    loop:true,
    grabCursor: true
});

/*--------------- SCROLL SECTIONS ACTIVE LINK ---------------*/


/*--------------- LIGHT DARK THEME ---------------*/ 


/*--------------- SCROLL REVEAL ANIMATION ---------------*/
