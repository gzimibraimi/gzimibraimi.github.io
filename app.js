// app.js

document.addEventListener("DOMContentLoaded", () => {
  // Regjistrojmë plugin-in ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animacion për hero content
  gsap.from(".hero-content h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".hero-content p", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });

  gsap.from(".hero-content .btn", {
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 1,
    ease: "back.out(1.7)"
  });

  // Animacion per secionet
  gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Animacion per project cards me stagger
  gsap.utils.toArray(".project-cards .card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.2, // delay për secilën kartelë
      ease: "power2.out"
    });
  });
});
