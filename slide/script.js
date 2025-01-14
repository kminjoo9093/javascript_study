slide('.up', 'up');
slide('.down', 'down');

function slide(slideTarget, direction){
  const target = document.querySelector(slideTarget);
  const firstEl = target.querySelector('li');
  const slideHeight = firstEl.offsetHeight + 20;

  const animation = target.animate([{
    top : direction === 'up' ? `-${slideHeight}px` : `${slideHeight}px`
  }], {
    duration : 3000,
    easing : 'linear'
  })

  animation.onfinish = function(){
    //애니메이션 실행 후
    if(direction === 'up'){
      target.appendChild(firstEl);
    } else {
      const lastEl = target.querySelector('li:last-child');
      target.prepend(lastEl);
    }
    slide(slideTarget, direction);
  }
}