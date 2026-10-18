document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const reveals = document.querySelectorAll('.reveal');

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-4', 'shadow-2xl', 'shadow-charcoal/5');
            nav.classList.remove('py-5');
            nav.style.background = 'rgba(250, 249, 246, 0.98)';
        } else {
            nav.classList.add('py-5');
            nav.classList.remove('py-4', 'shadow-2xl', 'shadow-charcoal/5');
            nav.style.background = 'rgba(250, 249, 246, 0.8)';
        }
    });

    // Reveal on Scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));

    // Optional: Parallax effect for the hero image decoration
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const floating = document.querySelector('.floating');
        if (floating) {
            floating.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
});
