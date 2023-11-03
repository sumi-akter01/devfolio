// AOS 
AOS.init();

// Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Typed JS
var typed = new Typed("#typed", {
  strings: ["Web Design", "Web Development", "Database Expert"],
  typeSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

// // CounterUp2
// const counterUp = window.counterUp.default;

// const callback = (entries) => {
//   entries.forEach((entry) => {
//     const el = entry.target;
//     if (entry.isIntersecting && !el.classList.contains("is-visible")) {
//       counterUp(el, {
//         duration: 2000,
//         delay: 16,
//       });
//       el.classList.add("is-visible");
//     }
//   });
// };

// const IO = new IntersectionObserver(callback, { threshold: 1 });

// const el = document.querySelector(".counter");
// IO.observe(el);