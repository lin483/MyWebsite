// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Get saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.className = savedTheme;
  updateToggleButton(savedTheme);
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const currentTheme = body.className;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply new theme
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateToggleButton(newTheme);
  });
  
  function updateToggleButton(theme) {
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (theme === 'dark') {
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
      themeToggle.setAttribute('aria-label', 'Switch to light theme');
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
      themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    }
  }
});