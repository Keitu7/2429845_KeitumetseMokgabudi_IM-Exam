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

      //triggering the .scrolled so when user scrolls past the homePage-backround sec, navbar background changes to black//
      gsap.to(".bg-image",{
        y:110,
        ease: "power1.out",
        scrollTrigger:{
            trigger: ".homePage-background",
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
     });

     //navbar background toggle
     ScrollTrigger.create({
        trigger: ".homePage-background",
        ease: "power1.out",
        start: "bottom 9%",
        end: "+=9999",//when the bottom of the homePage section reaches top of viewport
        toggleClass: {
            targets: ".navbar", 
            className: "black-bg"},
        toggleActions: "play none none reverse"
     });

     //This works and odes the same thing, just makes the above work manually wihtout gsap
     /*const navbar = document.querySelector(".navbar");
     window.addEventListener("scroll", () => {
        const heroHeight = document.querySelector(".homePage-background").offsetHeight;
        if (window.scrollY >= heroHeight) {
            navbar.classList.add("black-bg");
        }else {
            navbar.classList.remove("black-bg");
        }
     });*/