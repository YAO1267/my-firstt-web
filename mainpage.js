// hamburger
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  

// Intersection Observer to detect when the element enters the viewport
const textElements = document.querySelectorAll('.overlay-text');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });  // Trigger when 50% of the element is in view

// Observe each of the .overlay-text elements
textElements.forEach(textElement => {
    observer.observe(textElement);
});


const textElements2 = document.querySelectorAll('.brandstory-section2 .part1');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });  // Trigger when 50% of the element is in view

// Observe each of the .overlay-text elements
textElements2.forEach(textElement => {
    observer2.observe(textElement);
});


const textElements3 = document.querySelectorAll('.ouracai-section .text-content');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });  // Trigger when 50% of the element is in view

// Observe each of the .text-content elements
textElements3.forEach(textElement => {
    observer3.observe(textElement);
});

