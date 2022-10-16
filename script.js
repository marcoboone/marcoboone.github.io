const animate = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

animate.forEach((animate) => {
  observer.observe(animate);
});

const animate3 = document.querySelectorAll(".animate3");

const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.25,
  }
);

animate3.forEach((animate) => {
  observer3.observe(animate);
});

const animate2 = document.querySelectorAll(".animate2");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.25,
  }
);

animate2.forEach((animate) => {
  observer2.observe(animate);
});

const menu_btn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNav");
const links = document.querySelectorAll(".navLink");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
  });
});
