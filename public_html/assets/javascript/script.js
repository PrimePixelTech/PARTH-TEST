const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".header-ul");


// Toggle menu on click
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("active") &&
    !e.target.closest(".header-ul") &&
    !e.target.closest("#menu-icon")
  ) {
    navLinks.classList.remove("active");
  }
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  gsap.to(preloader, {
    opacity: 0,
    duration: 0.6,
    onComplete: () => (preloader.style.display = "none"),
  });
});

var tl = gsap.timeline();

tl.from(".header-logo", {
  y: -100,
  duration: 1,
  ease: "bounce.out",
  opacity: 0,
});
tl.from(".header-li", {
  // duration: 0.5,
  y: -100,
  stagger: 0.1,
  opacity: 0,
});








//Banner Section

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    }
  }
});



// Scroll animation
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});


//counter effect


// Counter Animation Logic
const counterBox = document.getElementById('counterBox');
const counterEl = document.getElementById('counter');
let hasCounted = false;

const animateCounter = () => {
  const target = 500;
  const duration = 2500; // 2.5 seconds for a smooth feel
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameDuration);
  const easeOutQuad = t => t * (2 - t); // Smooth easing function

  let frame = 0;

  const counterInterval = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const currentCount = Math.round(target * progress);

    if (currentCount >= target) {
      counterEl.textContent = target + "+";
      clearInterval(counterInterval);
    } else {
      counterEl.textContent = currentCount + "+";
    }

    if (frame >= totalFrames) {
      clearInterval(counterInterval);
      counterEl.textContent = target + "+";
    }
  }, frameDuration);
};

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasCounted) {
      animateCounter();
      hasCounted = true;
      // Optional: Unobserve after triggering
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

if (counterBox) {
  observer.observe(counterBox);
}