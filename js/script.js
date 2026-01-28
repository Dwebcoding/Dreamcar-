/**
 * Main Script Module
 * Gestisce animazioni, navigazione e interazioni principali del sito
 */
(function() {
    'use strict';

    // Configurazione
    const CONFIG = {
        CURTAIN_ANIMATION_DURATION: 1500,
        HEADER_HEIGHT: 80,
        SCROLL_REVEAL_OFFSET: 100,
        SELECTORS: {
            curtainContainer: '#curtain-container',
            mainContent: '#main-content-wrapper',
            navToggle: '.nav-toggle',
            mainNav: '.main-nav',
            header: '.header',
            fadeInSections: '.fade-in-section'
        }
    };

    /**
     * Gestisce l'animazione della tenda iniziale
     */
    const handleCurtainAnimation = () => {
        const curtainContainer = document.querySelector(CONFIG.SELECTORS.curtainContainer);
        const mainContent = document.querySelector(CONFIG.SELECTORS.mainContent);

        if (!curtainContainer || !mainContent) return;

        curtainContainer.classList.add('animate');

        setTimeout(() => {
            curtainContainer.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, CONFIG.CURTAIN_ANIMATION_DURATION);
    };

    /**
     * Gestisce il menu di navigazione mobile
     */
    const initMobileNavigation = () => {
        const navToggle = document.querySelector(CONFIG.SELECTORS.navToggle);
        const mainNav = document.querySelector(CONFIG.SELECTORS.mainNav);
        const header = document.querySelector(CONFIG.SELECTORS.header);

        if (!navToggle || !mainNav || !header) return;

        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            header.classList.toggle('nav-open');
        });
    };

    /**
     * Gestisce lo scroll dell'header (nasconde/mostra)
     */
    const initHeaderScroll = () => {
        const header = document.querySelector(CONFIG.SELECTORS.header);
        if (!header) return;

        let lastScrollTop = 0;
        let ticking = false;

        const updateHeader = (scrollTop) => {
            if (scrollTop > lastScrollTop && scrollTop > CONFIG.HEADER_HEIGHT) {
                header.style.top = `-${CONFIG.HEADER_HEIGHT}px`;
            } else {
                header.style.top = '0';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    updateHeader(scrollTop);
                });
                ticking = true;
            }
        }, { passive: true });
    };

    /**
     * Gestisce l'animazione fade-in delle sezioni
     */
    const initScrollReveal = () => {
        const fadeInSections = document.querySelectorAll(CONFIG.SELECTORS.fadeInSections);
        if (!fadeInSections.length) return;

        const revealSection = () => {
            const windowHeight = window.innerHeight;
            fadeInSections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight - CONFIG.SCROLL_REVEAL_OFFSET) {
                    section.classList.add('is-visible');
                }
            });
        };

        let scrollTicking = false;
        window.addEventListener('scroll', () => {
            if (!scrollTicking) {
                window.requestAnimationFrame(() => {
                    revealSection();
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        }, { passive: true });

        revealSection(); // Check iniziale
    };

    /**
     * Inizializza tutte le funzionalità
     */
    const init = () => {
        handleCurtainAnimation();
        initMobileNavigation();
        initHeaderScroll();
        initScrollReveal();
    };

    // Inizializza quando il DOM è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();