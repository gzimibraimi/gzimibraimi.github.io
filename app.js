// app.js

document.addEventListener("DOMContentLoaded", () => {
  // Regjistrojmë plugin-in ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animacion për header-in (hero content)
  gsap.from(".hero-content", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });

  // Animacione për çdo seksion kur shfaqet në ekran
  gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // fillon animacioni kur pjesa e sipërme e seksionit është në 80% të viewport-it
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });
});
