gsap.from(".hero-content h1", {duration: 1, y: -50, opacity: 0, ease: "bounce"});
gsap.from(".hero-content p", {duration: 1, delay: 0.3, y: -30, opacity: 0});
gsap.from(".hero-content .btn", {duration: 1, delay: 0.6, y: 20, opacity: 0});

gsap.from(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});