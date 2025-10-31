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

