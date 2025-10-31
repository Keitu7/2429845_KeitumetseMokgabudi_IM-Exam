// Create a GSAP timeline fo the contact-heading
const tl = gsap.timeline();

// Animate the title first
tl.to(".contact-heading", {
  duration: 1.5,
  opacity: 1,
  y: 0,
  ease: "power2.out"
})