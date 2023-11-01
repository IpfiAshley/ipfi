// toggle

let menuicon =  document.querySelector('#menuicon');
let sectio =  document.querySelector('.sectio');

menuicon.onclick = () =>  {
    menuicon.classList.toggle('bx-x');
    sectio.classList.toggle('active');   
};

let sections = document .querySelectorAll('section');
let navLinks = document .querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =  sec.offsetTop - 150 ;
        let height =  sec.offsetHeight;
        let id  =   sec.getAttribute('id');

        if(top >= offset && top <   offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        };
    });

    // sticky navbar
        let header = document.querySelector('header');
        
        header.classList.toggle('sticky', window.scrollY >100);

        // remove  toggle and sectio
        menuicon.classList.remove('bx-x');
        sectio.classList.remove('active');

};

// scroll reveal

ScrollReveal({ 
    // reset: true ,
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-section, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .servicescover, .portfoliobox, .contact form', { origin: 
'bottom' });
ScrollReveal().reveal('.home-section h1, .aboutimage', { origin: 'left' });
ScrollReveal().reveal('.home-section p, .aboutcontet', { origin: 'right' });