const navToggle = document.querySelector('.nav-toggle-icon');
const html = document.querySelector('html');
const navContent = document.querySelector('.nav-content');
const navToggleIcon = navToggle.children;
const menuToggle = document.querySelectorAll('.menu-toggle-icon');

document.addEventListener('DOMContentLoaded', () => {
    html.classList.toggle('js');
});

navToggle.addEventListener('click', () => {
   navContent.classList.toggle('show'); 
   if (navContent.classList.contains('show')) {
       navToggleIcon.item(0).innerHTML = 'Close';
       navToggleIcon.item(1).classList.replace('fa-bars', 'fa-window-close');
   } else {
       navToggleIcon.item(0).innerHTML = 'Menu';
       navToggleIcon.item(1).classList.replace('fa-window-close', 'fa-bars');
   }
});

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