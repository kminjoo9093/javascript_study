slide('.up', 'up');
slide('.down', 'down');

function slide(slideTarget, direction){
  const target = $(slideTarget);
  const slideHeight = target.find('li').eq(0).height() + 20;
  target.animate({
    top : direction === 'up' ? `-${slideHeight}px` : `${slideHeight}px`
  }, 3000, 'linear', function(){
    //애니메이션 실행 후
    if(direction === 'up'){
      $(this).find('li').eq(0).appendTo($(this));
    } else {
      $(this).find('li').last().prependTo($(this));
    }
    $(this).css('top', '0px');
    slide(slideTarget, direction)
  })
}