const aboutSection = document.querySelector(".about-container");

function revealOnScroll() {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionTop < screenPosition) {
    aboutSection.classList.add("visible");
  }
}

// Typewriter animation
window.addEventListener("scroll", revealOnScroll);

document.addEventListener("DOMContentLoaded", function () {
  const text = "Deanna Camacho...";
  const typewriter = document.querySelector(".gradient-typewriter");

  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }

  type();
});

// My Journey Slides
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
});
