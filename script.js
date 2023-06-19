  function toggleNavbar() {
    var navbar = document.getElementById("navbarNav");
    navbar.classList.toggle("responsive");
  }

  function closeNavbar() {
    var navbar = document.getElementById("navbarNav");
    navbar.classList.remove("responsive");
  }

  document.addEventListener('click', function(event) {
    var navbar = document.getElementById("navbarNav");
    var targetElement = event.target;

    if (
      !navbar.contains(targetElement) &&
      !targetElement.classList.contains("menu-icon") &&
      navbar.classList.contains("responsive")
    ) {
      navbar.classList.remove("responsive");
    }
  });

  window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


// Create a new Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animationName = entry.target.getAttribute('data-animation');
      entry.target.classList.add(animationName);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); // Adjust threshold as per your needs

// Observe all elements with the 'animation' class
const elements = document.querySelectorAll('.animation');
elements.forEach(element => {
  observer.observe(element);
});

