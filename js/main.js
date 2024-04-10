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
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelectorAll('.nav__menu a[href*="' + sectionId + '"]').forEach(link => {
                link.classList.add('active-link');
            });
        }
        else
        {
            document.querySelectorAll('.nav__menu a[href*="' + sectionId + '"]').forEach(link => {
                link.classList.remove('active-link');
            });
        }
    })
}

window.addEventListener('scroll', scrollActive);





/*--------------- LIGHT DARK THEME ---------------*/ 
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dlight-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// We validate if the user previously chose a theme
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}
// Function to toggle between dark and light theme
themeButton.addEventListener('click', () => {
    // Toggle the dark-theme class on the body element
    document.body.classList.toggle(lightTheme);
    // Toggle the icon theme class on the theme button
    themeButton.classList.toggle(iconTheme);
    // Save the theme and icon selection to local storage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// Add event listener to the theme button to toggle the theme on click
themeButton.addEventListener('click', toggleTheme);

/*--------------- SCROLL REVEAL ANIMATION ---------------*/
