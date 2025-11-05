// Create a GSAP timeline for the atKlava-heading
const tl = gsap.timeline();

// Animate the title first
tl.to(".atKlava-heading", {
  duration: 1.6,
  opacity: 1,
  y: 0,
  ease: "power2.out"
})

//Animate the pastry h2 
gsap.from(".pastry", {
  duration: 1.4,
  opacity: 0,
  y: 140,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".pastry", 
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

//Animating the cake h2
gsap.from(".cakes", {
  duration: 1.4,
  opacity: 0,
  y: 140,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".cakes", 
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

//Animating the dessert h2
gsap.from(".desserts", {
  duration: 1.4,
  opacity: 0,
  y: 140,
  ease: "power2.out",
  scrollTrigger:{
    trigger:".desserts", 
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

//Animating the filter buttons when they are into view
gsap.to(".stagger-btn",{
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.out",
    stagger: 0.4 ,//staggering each button by 0.2 seconds
    scrollTrigger: {
        trigger: ".button-group",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});


//Scaling up the menu section with animating the opacity and size
document.querySelectorAll(".menu").forEach((menu) => {
    //Main scaling + opacity animation
    gsap.fromTo(
        menu, {
            scale:0.8, 
            opacity: 0.8
        },
        {
            scale: 0.9,
            Opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: menu,
                start: "top 60%",
                end: "top 40%",
                scrub: true,
                toggleActions: "play none none reverse",
            },
        }
    );

    //Menu list text scalling effect
    gsap.fromTo(
        menu.querySelectorAll(".menu-list ul li"),
        {fontSize: "20px"},
        {
            fontSize: "24px",
            ease: "none",
            scrollTrigger: {
                trigger: menu,
                start: "top 50%",
                end: "top 40%",
                scrub: true,
                toggleActions: "play none none reverse",
            },
        }
    );
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