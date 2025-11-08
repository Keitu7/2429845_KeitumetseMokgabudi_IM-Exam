//trigger's hero/homePage-background section on scroll//
gsap.registerPlugin(ScrollTrigger);

gsap.to(".bg-image", {
  y: 110,
  ease: "Power1.out",
  scrollTrigger: {
    trigger: ".homePage-background",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

//Gsap splittling the letters and animating them
/*const title = document.querySelector(".klava-title");
const letters = title.textContent.split("");

title.innerHTML = ""; //clearing the original letters

letters.forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  title.appendChild(span);
});*/

gsap.from(".klava-title span", {
  opacity: 0,
  y: 120,
  duration: 0.6,
  stagger: 0.3,
  ease: "power2.out"
});

//Animating the tagline after the KLAVA letters finish
gsap.from(".klava-tagline", {
  opacity: 0,
  y: 60,
  duration: 1.3,
  ease: "power2.out",
  delay: 2
});

//Animate the KLAVA's About Us h2 
/*gsap.from(".about-heading", {
  duration: 1.4,
  opacity: 0,
  y: 140,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".about-heading", 
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});*/

//Animating the What's At KLAVA h2 
gsap.utils.toArray(".about-heading").forEach(heading => {
  gsap.from(heading, {
    duration: 1.4,
    opacity: 0,
    y: 140,
    ease: "power2.out",
    scrollTrigger:{
      trigger: heading, 
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });
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