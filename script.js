tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#10B981',
                dark: '#1F2937',
                light: '#F9FAFB',
                accent: '#F59E0B'
            }
        }
    }
}


 // Mobile menu toggle
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');
 
 mobileMenuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId === '#') return;
         
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
             targetElement.scrollIntoView({
                 behavior: 'smooth'
             });
             
             // Close mobile menu if open
             if (!mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.add('hidden');
             }
         }
     });
 });

 // Property card hover effect
 const propertyCards = document.querySelectorAll('.property-card');
 propertyCards.forEach(card => {
     card.addEventListener('mouseenter', () => {
         card.classList.add('shadow-lg');
     });
     card.addEventListener('mouseleave', () => {
         card.classList.remove('shadow-lg');
     });
 });

 // Animation on scroll
 const animateOnScroll = () => {
     const elements = document.querySelectorAll('.property-card, .hero-bg h1, .hero-bg p, .flex.flex-col.md\\:flex-row.items-center');
     
     elements.forEach(element => {
         const elementPosition = element.getBoundingClientRect().top;
         const screenPosition = window.innerHeight / 1.3;
         
         if (elementPosition < screenPosition) {
             element.style.opacity = '1';
             element.style.transform = 'translateY(0)';
         }
     });
 };

 // Set initial state for animated elements
 document.querySelectorAll('.property-card, .hero-bg h1, .hero-bg p, .flex.flex-col.md\\:flex-row.items-center').forEach(el => {
     el.style.opacity = '0';
     el.style.transform = 'translateY(20px)';
     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 });

 // Run once on page load
 window.addEventListener('load', animateOnScroll);
 
 // Run on scroll
 window.addEventListener('scroll', animateOnScroll);