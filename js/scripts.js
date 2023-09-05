// Get all navbar items
const navItems = document.querySelectorAll('.nav-link');

// Add onclick event to each navbar item
navItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = item.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Remove active class from all navbar items
    navItems.forEach(item => {
      item.classList.remove('active');
    });

    // Add active class to the clicked navbar item
    item.classList.add('active');

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});