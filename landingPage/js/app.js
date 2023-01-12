/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/*
//make a list of the sections which we will put in the navigation
const listItems = ["section1", "section2", "section3", "section4"];
//iterate over each item to add it to the list and add a class to it
listItems.forEach((item) => {
  let listElement = document.createElement("li");
  listElement.textContent = item;
  listElement.classList.add("menu__link");
  //adding a dataLink attribute to each element
  listElement.setAttribute("data-link", item);
  //add and event listener for the scrolling

  
  listElement.addEventListener("click", (e) => {
    e.preventDefault;
    const scroll = document.getElementById(
      listElement.getAttribute("data-link")
    );
    console.log(scroll);
    scroll.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  //attach the newly created list to the already created ul
  document.getElementById("navbar__list").appendChild(listElement);
});

*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

// Define Global Variables
let sections = document.querySelectorAll("section");
const menu = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
// * End Global Variables
// creating function to build the navbar
function navBar() {
  //iterate over every section
  sections.forEach((section) => {
    //get section ID and title in a variable
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    //create Elements for the navBar
    li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.classList.add("menu__link");
    anchor.href = `#${sectionId}`;
    //li.setAttribute("data-link", section.dataset.nav);
    anchor.textContent = sectionTitle;
    //add an event listener method to scroll into view
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const scroll = document.getElementById(sectionId);
      console.log(scroll);
      scroll.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    //add created items to fragment
    li.appendChild(anchor);
    fragment.appendChild(li);
  });
  //add fragment to page to avoid repaint
  menu.appendChild(fragment);
}
navBar();


/*
const section = document.createElement("section");
const div = document.createElement("div");
const h2 = document.createElement("h2");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
//creating Texts
const h2Text = document.createTextNode("Section 4");
const para1Text = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue"
);
const para2Text = document.createTextNode(
  "Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non"
);
//adding Attributes
section.id = "section4";
section.setAttribute("data-nav", "Section 4");
div.classList.add("landing__container");
//adding text to elements
h2.appendChild(h2Text);
para1.appendChild(para1Text);
para2.appendChild(para2Text);
//adding elements to the DOM
section.appendChild(div);
div.appendChild(h2);
div.appendChild(para1);
div.appendChild(para2);
document.querySelector("main").appendChild(section);
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
//document.getElementById("navbar__list").style.display = "flex";
// Add class 'active' to section when near top of viewport
//creating an event listener for adding the "active" class
const allLinks = document.querySelectorAll("a.menu__link");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    //aquiring the dimentions of each section using either offsetTop or getBoundingClientReact().top
    //const sectionTop = section.offsetTop;
    const sectionTop = section.getBoundingClientRect().top;
    const sectionTitle = section.getAttribute("data-nav");
   // console.log(sectionTop);
    if (sectionTop > 0 && sectionTop < 250) {
      section.classList.add("your-active-class");
      allLinks.forEach((link) => {
        if (link.textContent === sectionTitle) {
          link.classList.add("your-active-link");
        } else {
          link.classList.remove("your-active-link");
        }
      });
    } else {
      section.classList.remove("your-active-class");
    }
  });
});
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
