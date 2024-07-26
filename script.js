const images = [
    'img/image1.avif',
    'img/image2.webp',
    'img/image3.jpg',
    'img/image4.webp'
];

let slideIndex = 0;
const sliderContainer = document.getElementById('slider');

// Ensure sliderContainer is correctly retrieved
if (sliderContainer) {
    createSlides();
    showSlides();
}

function createSlides() {
    images.forEach((src, index) => {
        let slideDiv = document.createElement('div');
        slideDiv.classList.add('slide', 'fade');

        let img = document.createElement('img');
        img.src = src;
        img.alt = `Coffee Image ${index + 1}`;

        slideDiv.appendChild(img);
        sliderContainer.appendChild(slideDiv);
    });
}

function showSlides() {
    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const aboutText = document.getElementById('about-text');
    const navLinks = document.querySelectorAll('.navbar ul li a');


    // Smooth scroll functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const hash = this.getAttribute('href');
            console.log(`Nav link clicked: ${hash}`);
            if (hash.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    console.log(`Scrolling to: ${hash}`);
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.log(`Element not found: ${hash}`);
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const formData = new FormData(contactForm);

        // Optionally, you can handle the form data here (e.g., send it to a server or display a success message)
        console.log('Form Submitted', Object.fromEntries(formData));

        // Display a success message
        alert('Thank you for contacting us! We will get back to you soon.');

        // Reset the form
        contactForm.reset();
    });
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const homeSection = document.getElementById('home');

    const toggleNavbarColor = () => {
        const homeSectionRect = homeSection.getBoundingClientRect();
        const isHomeVisible = homeSectionRect.top < window.innerHeight && homeSectionRect.bottom >= 0;

        if (isHomeVisible) {
            navbar.classList.add('transparent');
        } else {
            navbar.classList.remove('transparent');
        }
    };

    // Initial check
    toggleNavbarColor();

    // Check on scroll
    window.addEventListener('scroll', toggleNavbarColor);
});

