// Header Hide/Show on Scroll
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', ()=> {
    const currentScrollY = window.scrollY;

    if (currentScrollY == 0) {
        header.classList.remove('header-hidden');
    } else if (currentScrollY > lastScrollY) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
});

// 3D Hover Tilt Effect for Cards
const cards = document.querySelectorAll('.interactive-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation amounts based on mouse position
        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees tilt
        const rotateY = ((x - centerX) / centerX) * 10;
        
        // Apply transformation to the card
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    // Reset transform when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 0.5s ease-out';
    });
    
    // Remove transition when hovering so tracking feels immediate and smooth
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});