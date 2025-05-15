// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
    
    // Animate burger lines
    burger.querySelectorAll('div').forEach((line, index) => {
        if (navLinks.classList.contains('active')) {
            if (index === 0) line.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            if (index === 1) line.style.opacity = '0';
            if (index === 2) line.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            line.style.transform = '';
            line.style.opacity = '';
        }
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
                burger.querySelectorAll('div').forEach(line => {
                    line.style.transform = '';
                    line.style.opacity = '';
                });
            }
        }
    });
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-level, .stat-number');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            if (element.classList.contains('stat-number')) {
                const target = parseInt(element.getAttribute('data-count'));
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);
                
                const animate = () => {
                    const current = parseInt(element.textContent);
                    if (current < target) {
                        element.textContent = Math.ceil(current + increment);
                        setTimeout(animate, 16);
                    } else {
                        element.textContent = target;
                    }
                };
                
                animate();
            } else {
                element.style.width = element.style.width || '0%';
            }
        }
    });
};

// Initialize animations on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
        this.reset();
    });
}
