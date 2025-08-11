// Animação navbar
gsap.from("nav", { y: -60, opacity: 0, duration: 1, ease: "power2.out" });

// Hero
gsap.from(".hero img", { opacity: 0, scale: 0.9, duration: 1, delay: 0.3 });
gsap.from(".hero h2, .hero p", { opacity: 0, y: 20, duration: 0.8, delay: 0.5, stagger: 0.2 });

// Cards
gsap.from(".card", { y: 50, opacity: 0, duration: 1, delay: 0.8, stagger: 0.3 });

// Botão com pulso
gsap.to(".btn-curiosidade", { scale: 1.05, duration: 0.8, repeat: -1, yoyo: true, ease: "power1.inOut" });

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar (animação normal ao carregar)
gsap.from("nav", { y: -60, opacity: 0, duration: 1, ease: "power2.out" });

// Hero Section (aparece ao rolar)
gsap.from(".hero img", {
    scrollTrigger: {
        trigger: ".hero img",
        start: "top 80%",
    },
    opacity: 0,
    scale: 0.9,
    duration: 1
});

gsap.from(".hero h2, .hero p", {
    scrollTrigger: {
        trigger: ".hero h2",
        start: "top 85%",
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2
});

// Cards (cada um com delay ao entrar na tela)
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".cards, .container",
        start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});

// Botão com pulso infinito
gsap.to(".btn-curiosidade", {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});


gsap.registerPlugin(ScrollTrigger);

// Navbar
gsap.from("nav", { y: -60, opacity: 0, duration: 1, ease: "power2.out" });

// Hero - Parallax da imagem
gsap.to(".hero", {
    backgroundPositionY: "40%",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Texto da Hero (fade-in ao rolar)
gsap.from(".hero-content h2, .hero-content p", {
    scrollTrigger: {
        trigger: ".hero-content",
        start: "top 85%"
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2
});

// Cards
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".container",
        start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});

// Botão com pulso
gsap.to(".btn-curiosidade", {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
