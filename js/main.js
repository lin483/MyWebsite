window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('gotoTop').style.display = 'block';
  } else {
    document.getElementById('gotoTop').style.display = 'none';
  }
}
