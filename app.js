gsap.from(".hero-content h1", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero-content p", { y: 20, opacity: 0, duration: 1, delay: 0.5 });
gsap.from(".hero-content .btn", { scale: 0, opacity: 0, duration: 1, delay: 1 });

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1
  });
});
