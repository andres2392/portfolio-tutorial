const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");


//------FILTER PORTFOLIO ---------//
filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

//------   MOVE SERVICES -------------//
$(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
  });

 
//------   SKILLS BAR MOVEMENT -------------//

window.addEventListener("scroll", () => {
    skillsEffect();
    countUp();
  });
  
  function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  }
  
  function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }