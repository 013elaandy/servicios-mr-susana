const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 60, 400)}ms`;
    observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ============ GALLERY CAROUSEL ============ */
const galleryData = [
    {
        image: 'Susana/Papa%201.jfif',
        title: 'Asesoría Académica Personalizada',
        desc: 'Sesiones de tutoría diseñadas para impulsar el rendimiento académico de cada estudiante con metodologías efectivas.'
    },
    {
        image: 'Susana/Papa%202.jfif',
        title: 'Business English Profesional',
        desc: 'Capacitación de inglés empresarial para ejecutivos y profesionales que buscan destacar en el ámbito corporativo global.'
    },
    {
        image: 'Susana/Oficina.jfif',
        title: 'Traducciones Legales Certificadas',
        desc: 'Traducciones precisas y certificadas de contratos, documentos oficiales y expedientes legales con validez oficial.'
    },
    {
        image: 'Susana/Jose.png',
        title: 'Preparación para Exámenes SAT',
        desc: 'Entrenamiento intensivo con estrategias probadas para alcanzar los mejores puntajes en el examen SAT internacional.'
    },
    {
        image: 'Susana/oficina%203.jfif',
        title: 'TOEFL / IELTS / TOEIC Specialist',
        desc: 'Preparación integral para certificaciones internacionales de inglés con material actualizado y simulacros reales.'
    }
];

(function initGallery() {
    const stage = document.getElementById('galleryStage');
    const titleEl = document.getElementById('galleryTitle');
    const descEl = document.getElementById('galleryDesc');

    if (!stage) return;

    let currentIndex = 0;
    let lastRandom = -1;
    let autoplay = true;
    let autoplayInterval;
    const AUTOPLAY_MS = 5500;

    function buildSlides() {
        galleryData.forEach((item, i) => {
            const slide = document.createElement('div');
            slide.className = 'gallery-slide' + (i === 0 ? ' active' : '');
            slide.innerHTML = `<img src="${item.image}" alt="${item.title}" loading="lazy">`;
            stage.appendChild(slide);
        });
        updateCaption(0);
    }

    function updateCaption(i) {
        const d = galleryData[i];
        if (titleEl) titleEl.textContent = d.title;
        if (descEl) descEl.textContent = d.desc || '';
    }

    function goTo(newIndex) {
        if (newIndex === currentIndex) return;
        const slides = stage.querySelectorAll('.gallery-slide');
        slides[currentIndex].classList.remove('active');
        slides[newIndex].classList.add('active');
        currentIndex = newIndex;
        updateCaption(newIndex);
    }

    function next() {
        if (galleryData.length <= 1) return;

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * galleryData.length);
        } while (randomIndex === currentIndex);

        goTo(randomIndex);
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(next, AUTOPLAY_MS);
    }

    function stopAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
    }

    function restartAutoplay() {
        if (autoplay) startAutoplay();
    }

    stage.addEventListener('mouseenter', stopAutoplay);
    stage.addEventListener('mouseleave', () => { if (autoplay) startAutoplay(); });

    buildSlides();
    startAutoplay();
})();
