// GSAP Animations for smooth transitions

// Hero Section Animation
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".hero .btn", { opacity: 0, y: 50, duration: 1, delay: 1 });

// About Section Animation
gsap.from("#about", { opacity: 0, y: 50, duration: 1, delay: 1.5 });

// Projects Section Animation
gsap.from("#projects", { opacity: 0, y: 50, duration: 1, delay: 2 });

// Hover effect on project cards
gsap.utils.toArray(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" });
  });
});

// Scroll to section smooth animation
document.querySelector(".hero .btn").addEventListener("click", function(e) {
  e.preventDefault();
  gsap.to(window, { scrollTo: "#projects", duration: 1 });
});
