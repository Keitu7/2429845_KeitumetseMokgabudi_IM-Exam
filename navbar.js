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