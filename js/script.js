// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when you click on navbar scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'Data Analyst', 'Business Intelligence Analyst'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    e.preventDefault()
    var name = document.getElementById('name1').value;
    var email = document.getElementById('email1').value;
    var phone = document.getElementById('phone1').value;
    var subject = document.getElementById('subject1').value;
    var message = document.getElementById('message1').value;
    var body = 'name1: ' + name + '<br/> email1' + email + '<br/> phone1' + phone + '<br/> subject1' + subject + '<br/> message1' + message;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "micahothino44@gmail.com",
        Password : "gecdhiwbjeatrnqm",
        To : 'micahothino44@gmail.com',
        From : email,
        Phone : phone,
        Subject : subject,
        Body : message
    }).then(
      message => alert(message)
    );
})
