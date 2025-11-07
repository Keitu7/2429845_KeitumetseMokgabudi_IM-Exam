// Create a GSAP timeline for the ABOUT US-heading
const tl = gsap.timeline();

// Animate the title first
tl.to(".about-heading", {
  duration: 1.6,
  opacity: 1,
  y: 0,
  ease: "power2.out"
});

//Animate the KLAVA's Story h2 
gsap.from(".story-heading", {
  duration: 1.4,
  opacity: 0,
  y: 140,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".story-heading", 
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

//Animating the signature
gsap.registerPlugin(DrawSVGPlugin);

gsap.from("#signature", {
  drawSVG: "0%",
  duration: 4,
  ease:"power2.inOut",
  scrollTrigger:{
    trigger: "#signature",
    start: "top 75%",
    toggleActions: "play pause resume pause",

  }
});

