$('a.scrollTo').on('click',function(){
  var scrollTo = $(this).attr('data-scrollTo');
  if (scrollTo === 'homeloc') {
    console.log('homeloc activated');
    $('body,html').animate({
      "scrollTop": $('#'+scrollTo).offset().top-1000},1000);
  } else {
    console.log('not homeloc');
    $('body,html').animate({
      "scrollTop": $('#'+scrollTo).offset().top-40},1000);
  }
  return false;
})
