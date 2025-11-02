


// Create a GSAP timeline for the contact-heading
const tl = gsap.timeline();

// Animate the title first
tl.to(".contact-heading", {
  duration: 1.5,
  opacity: 1,
  y: 0,
  ease: "power2.out"
})


//Creating GSAP MotionPath for the map and pin route
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#pin",{
    duration: 8,
    repeat: -1,
    ease: "none",
    motionPath:{
        path: "#driverPath",
        align: "#driverPath",
        autoRotate:true,
        alignOrigin:[0.5, 0.9]
    }
});