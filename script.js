let text = document.getElementById("text");
let treeLeft = document.getElementById("tree-left");
let treeRight = document.getElementById("tree-right");
let gateLeft = document.getElementById("gate-left");
let gateRight = document.getElementById("gate-right");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

//   console.log("ScrollY:", value);

  text.style.marginTop = value * 2.5 + "px";
  treeLeft.style.left = value * -1.5 + "px";
  treeRight.style.left = value * 1.5 + "px";
  gateLeft.style.left = value * -1.5 + "px";
  gateRight.style.left = value * 1.5 + "px";
});

// Get all navigation links
const navLinks = document.querySelectorAll(".n");

// Function to update the active link based on the current section
function updateActiveLink() {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (
            section &&
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Update the active link on page load and scroll
window.addEventListener("load", updateActiveLink);
window.addEventListener("scroll", updateActiveLink);


// /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
// // Scroll Reveal for elements with class "from-top"
// const srFromTop = ScrollReveal({
//   origin: "top",
//   distance: "80px",
//   duration: 1000,
//   delay: 300,
//   reset: true,
// });

// // Scroll Reveal for elements with class "from-bottom"
// const srFromBottom = ScrollReveal({
//   origin: "bottom",
//   distance: "80px",
//   duration: 1000,
//   delay: 300,
//   reset: true,
// });

// // Scroll Reveal for elements with class "from-left"
// const srFromLeft = ScrollReveal({
//   origin: "left",
//   distance: "80px",
//   duration: 1000,
//   delay: 300,
//   reset: true,
// });

// // Scroll Reveal for elements with class "from-right"
// const srFromRight = ScrollReveal({
//   origin: "right",
//   distance: "80px",
//   duration: 1000,
//   delay: 300,
//   reset: true,
// });

// // Apply animations to elements based on their class
// srFromTop.reveal( ".from-top" );
// srFromBottom.reveal(".from-bottom");
// srFromLeft.reveal(".from-left");
// srFromRight.reveal(".from-right");
