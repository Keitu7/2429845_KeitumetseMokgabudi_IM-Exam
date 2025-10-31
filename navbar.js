//navbar.js 
//implementing the navbar so it dynamically appears on all pages without hard coding it on every html page
//Selecting where the navbar should go 
const body = document.body;

//creating navbar element
const navbar = document.createElement("nav");
navbar.classList.add("navbar");

//NAVBAR CREATION
//Add inner HTML for logo, links and hamburger responsive design
navbar.innerHTML = `
 <div class="logo"><a href="index.html">KLAVA</a></div>
        <ul class="nav-links">
           <li><a href="index.html">HOME</a></li>
           <li><a href="aboutPage.html">ABOUT</a></li>
           <li><a href="atKlavaPage.html">At KLAVA</a></li>
           <li><a href="blogsPage.html">BLOGS</a></li>
           <li><a href="contactPage.html">CONTACT</a></li>
        </ul>

        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        `;

        //Inserting the navbar at the top of the body
        body.insertBefore(navbar, body.firstChild);


//FOOTER CREATION
//making the footer javascript navigated instead of hard-coding it into html on every page
const footer = document.createElement("footer");
footer.innerHTML = `
        <ul>
            <li><a href="contactPage.html">CONTACT US</a></li>
            <p class="copyright-notice">&copy; 2025 KLAVA. All rights reserved.</p>
            <li><a href="#">info@KLAVApastries.com</a></li>
        </ul>
        `;

        //Inserting the footer at the bottom of the viewport
        body.appendChild(footer);


//triggering the .scrolled so when user scrolls past the homePage-backround sec, navbar background changes to black//
gsap.registerPlugin(ScrollTrigger);
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