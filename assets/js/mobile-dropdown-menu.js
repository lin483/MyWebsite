document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const body = document.body;

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function () {
      // Toggle mobile navigation
      mobileNav.classList.toggle('mobile-nav-open');

      // Change hamburger icon
      if (mobileNav.classList.contains('mobile-nav-open')) {
        mobileMenuToggle.innerHTML = '✕'; // Close icon
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        // Prevent body scrolling when menu is open
        body.style.overflow = 'hidden';
      } else {
        mobileMenuToggle.innerHTML = '☰'; // Hamburger icon
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        // Restore body scrolling
        body.style.overflow = '';
      }
    });

    // Close mobile menu when clicking nav links
    const navLinks = mobileNav.querySelectorAll('.page-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('mobile-nav-open');
        mobileMenuToggle.innerHTML = '☰';
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!mobileNav.contains(event.target) &&
        !mobileMenuToggle.contains(event.target) &&
        mobileNav.classList.contains('mobile-nav-open')) {
        mobileNav.classList.remove('mobile-nav-open');
        mobileMenuToggle.innerHTML = '☰';
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
    });

    // Close mobile menu on window resize (if switching to desktop)
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && mobileNav.classList.contains('mobile-nav-open')) {
        mobileNav.classList.remove('mobile-nav-open');
        mobileMenuToggle.innerHTML = '☰';
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
    });
  }
});