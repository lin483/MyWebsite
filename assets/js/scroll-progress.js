// Scroll Progress Bar
document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.getElementById('progressBar');
  
  function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  }
  
  // Update progress bar on scroll
  window.addEventListener('scroll', updateProgressBar);
  
  // Initial call
  updateProgressBar();
});