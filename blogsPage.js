// Create a GSAP timeline for the ABOUT US-heading
const tl = gsap.timeline();

// Animate the title first
tl.to(".blogs-heading", {
  duration: 1.6,
  opacity: 1,
  y: 0,
  ease: "power2.out"
});

//Animate the KLAVA's Story h2 Blog 1
gsap.utils.toArray(".blog1-heading").forEach(heading => {
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

//Animate the pastry h2 
/*gsap.from(".blog1-heading", {
  duration: 1.4,
  opacity: 0,
  y: 140,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".blog1-heading", 
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

//Animate the pastry h2 
gsap.from("#blog2-heading", {
  duration: 1.4,
  opacity: 0,
  y: 140,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".blog-info", 
    start: "top 80%",
    toggleActions: "play none none none"
  }
})*/


//Read-More button functionality
const readMoreBtns = document.querySelectorAll(".readMoreBtn");


readMoreBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const moreText = btn.previousElementSibling; //this finds the .moreText above the button

        moreText.classList.toggle("open");

        if (moreText.classList.contains("open")) {
            btn.textContent = "Read Less";
        } else {
            btn.textContent = "Read More";
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