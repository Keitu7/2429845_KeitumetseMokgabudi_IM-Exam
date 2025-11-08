// Create a GSAP timeline for the atKlava-heading
const tl = gsap.timeline();

// Animate the title first
tl.to(".atKlava-heading", {
  duration: 1.6,
  opacity: 1,
  y: 0,
  ease: "power2.out"
});

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


//The js code for the API menu list and filtering funtionality
//=== My Spoonacular API KEY ===
const API_KEY= "026892c3cc0447c098eeeabbe190f59c";

//The base search words for each section
const sectionQueries ={
  pastry: "pastry",
  cake: "cake",
  dessert: "dessert"
};

//The max items fetched per section
const ITEMS_PER_SECTION = 15;

//The <ul> elements
const lists = {
  pastry: document.getElementById("pastry-list"),
  cake: document.getElementById("cake-list"),
  dessert: document.getElementById("dessert-list")
};

//The filter buttons
const allBtn = document.getElementById("all-btn");
const vanillaBtn = document.getElementById("vanilla-btn");
const chocolateBtn = document.getElementById("chocolate-btn");
const mixedBtn = document.getElementById("mixed-btn");


//store original full results so ALL button can restore original results
let originalResults = {
  pastry: [],
  cake: [],
  dessert: []
};


//=== Function to fetch API Data from SPOONACULAR ===
async function fetchSection(sectionName, query) {
  const url = `https://api.spoonacular.com/food/products/search?query=${query}&number=${ITEMS_PER_SECTION}&apiKey=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.products) {
      return data.products.map(item => item.title);
    } else {
      console.error('No products found for ${sectionName}');
      return [];
    }
  } catch (err) {
    console.error(err);
    return [];
  }
}

//=== Function to render list items ===
function renderList(listElement, items) {
  listElement.innerHTML = ""; //clears previous filtered results
  items.forEach(title => {
    const li = document.createElement("li");
    li.textContent = title;
    listElement.appendChild(li);
  });
}

//===Initial Load: Fetch all sections ===
async function loadAllSections() {
  const pastryItems = await fetchSection("pastry", sectionQueries.pastry);
  const cakeItems = await fetchSection("cake", sectionQueries.cake);
  const dessertItems = await fetchSection("dessert", sectionQueries.dessert);

  originalResults.pastry = pastryItems;
  originalResults.cake = cakeItems;
  originalResults.dessert = dessertItems;

  renderList(lists.pastry, pastryItems);
  renderList(lists.cake, cakeItems);
  renderList(lists.dessert, dessertItems);
}

//=== Filter Functions ===
function filterItems(keyword) {
  Object.keys(originalResults).forEach(section => {
    const filtered = originalResults[section].filter(title =>
      keyword == "mixed"
      ? !title.toLowerCase().includes("vanille") && !title.toLowerCase().includes("chocolat")
      : title.toLowerCase().includes(keyword)
    );
    renderList(lists[section], filtered);
  });
}

//=== Button Event Listeners ===
allBtn.addEventListener("click", () => {
  renderList(lists.pastry, originalResults.pastry);
  renderList(lists.cake, originalResults.cake);
  renderList(lists.dessert, originalResults.dessert);
});

vanillaBtn.addEventListener("click", () => filterItems("vanille"));
chocolateBtn.addEventListener("click", () => filterItems("chocolat"));
mixedBtn.addEventListener("click", () => filterItems("mixed"));

//=== Initial Load ===
loadAllSections();
