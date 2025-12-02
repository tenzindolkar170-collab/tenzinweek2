document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('menu-button');
  var nav = document.getElementById('primary-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.textContent = open ? '✕' : '☰';
    });

    var links = nav.querySelectorAll('a');
    links.forEach(function (a) {
      a.addEventListener('click', function () {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
          menuBtn.textContent = '☰';
        }
      });
    });
  }

  var form = document.getElementById('contact-form');
  var msg = document.getElementById('form-message');
  if (form && msg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        msg.textContent = 'Please fill out all required fields.';
        msg.style.color = 'crimson';
        return;
      }
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        msg.textContent = 'Please enter a valid email.';
        msg.style.color = 'crimson';
        return;
      }
      msg.textContent = 'Thank you! I will contact you soon (mock).';
      msg.style.color = 'green';
      form.reset();
    });
  }
});
