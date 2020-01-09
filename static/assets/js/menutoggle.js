(function(){
  let nav = document.querySelector('.nav');
  let navContent = document.querySelector('.nav__content');
  
  
  navContent.hidden = true;
  
  
  
  const btn = document.createElement("button");
  
  btn.classList.add("nav__toggle");
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'show menu');
  btn.innerHTML = `
  <i class="fas fa-2x fa-bars"></i>
  `
  
  btn.addEventListener('click', (e) => {
    navContent.classList.toggle('show')  
  }) 
  
  if (nav) {
    nav.insertBefore(btn, navContent);
  }
})()

/*
navToggle.addEventListener('click', () => {
  navContent.classList.toggle('show'); 
  if (navContent.classList.contains('show')) {
    navToggleIcon.item(0).classList.replace('fa-bars', 'fa-window-close');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggleIcon.item(0).classList.replace('fa-window-close', 'fa-bars');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
*/

function animateWhenVisible() {
  var targets = document.querySelectorAll('.animateWhenVisible');
  var intersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  var observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);
  targets.forEach(q => {
    observer.observe(q);
  });
  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('animated', 'fadeInUpSmall');
      }
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
    });
  }
}
animateWhenVisible();

/*
function lazyLoad() {
  var targets = document.querySelectorAll('.lazy-load');
  var intersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  var observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);
  targets.forEach(q => {
    observer.observe(q);
  });
  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('animated', 'fadeInUpSmall');
      }
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
    });
  }
}
lazyLoad();
*/