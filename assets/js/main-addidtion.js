"use strict";
const navLinks = document.querySelectorAll(".nav-link");
const section = document.querySelectorAll("section");
const sectionArray = Array.from(section);
// remove section that are not in menu
const sectionEl = sectionArray.filter(
  (section) => !section.classList.contains("resume-section")
);

window.addEventListener("scroll", () => {
  let currentSection = "";
  // current section
  sectionEl.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY;
    if (scrollPosition >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    // remove activeLink state from all links
    link.classList.remove("active");
    // only add activeLink if any of the link mactches the id of the current section in view
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
