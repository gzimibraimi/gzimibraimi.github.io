// app.js

document.addEventListener("DOMContentLoaded", () => {
  // Regjistro plugin-et GSAP
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /* ================= HERO ANIMATION ================= */
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

  gsap.from(".hero-buttons .btn", {
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 1,
    ease: "back.out(1.7)",
    stagger: 0.2
  });

  /* ================= FLOATING CIRCLES ================= */
  gsap.utils.toArray(".floating-circle").forEach(circle => {
    gsap.to(circle, {
      y: '+=30',
      x: '+=20',
      repeat: -1,
      yoyo: true,
      duration: gsap.utils.random(3,6),
      ease: "sine.inOut"
    });
  });

  /* ================= SECTIONS SCROLL ANIMATION ================= */
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

  /* ================= PROJECT CARDS STAGGER ================= */
  gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out"
    });
  });

  /* ================= CERTIFICATE CARDS STAGGER ================= */
  gsap.utils.toArray(".certificate-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power2.out"
    });
  });

  /* ================= BACK TO TOP BUTTON ================= */
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: {y: 0}, ease: "power2.out"});
  });

  /* ================= CERTIFICATES SLIDER DRAG SCROLL ================= */
  gsap.utils.toArray(".certificates-slider").forEach(slider => {
    slider.addEventListener("wheel", e => {
      e.preventDefault();
      gsap.to(slider, {
        scrollTo: {x: slider.scrollLeft + e.deltaY},
        duration: 0.5,
        ease: "power2.out"
      });
    });
  });

});
