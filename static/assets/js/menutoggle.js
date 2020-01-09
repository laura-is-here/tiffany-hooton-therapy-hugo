if (document) {(function(){
  let nav = document.querySelector('.nav');
  let navContent = document.querySelector('.nav__content');
  
  if ((nav) && (navContent)) {
    navContent.hidden = true;
    
    
    
    const fragment = document.createDocumentFragment()
    const btn = document.createElement('button')
    
    btn.classList.add('nav__toggle')
    btn.setAttribute('aria-expanded', 'false')
    btn.setAttribute('aria-label', 'show menu')
    btn.innerHTML = `
    <span class="iconify   " data-icon="fa:bars"></span>
    `
    
    btn.addEventListener('click', (e) => {
      navContent.classList.toggle('show')  
    }) 
    
    fragment.appendChild(btn)
    nav.insertBefore(fragment, navContent)
    
  }
  
  
})()}

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
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.remove('lazy-load')
        observer.unobserve(entry.target);
      }
    });
  }
}
lazyLoad();