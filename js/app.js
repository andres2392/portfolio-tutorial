const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");

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


//------   RECORD COUNT MOVEMENT -------------//
function countUp() {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
      const updateCount = () => {
        let currentNum = +numb.innerText;
        let maxNum = +numb.dataset.num;
        let speed = 300;
        const increment = Math.ceil(maxNum / speed);
  
        if (currentNum < maxNum) {
          numb.innerText = currentNum + increment;
          setTimeout(updateCount, 1);
        } else {
          numb.innerText = maxNum;
        }
      };
  
      setTimeout(updateCount, 400);
    });
  }


//------   SWIPER TESTIMONIALS MOVEMENT -------------//
  var mySwiper = new Swiper(".swiper-container", {
    speed: 1100,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });