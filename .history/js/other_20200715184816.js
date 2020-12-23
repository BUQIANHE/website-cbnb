$(function(){

  // banner js
  $('.slide_item').bxSlider({
    slideWidth: 1920,
    maxSlides: 1,
    moveSlides: 1,
		startSlide: 1,
    slideMargin: 0,
    auto: true,
		autoControls: false,
		pager: true,
		controls: true,
		speed: 600,
  })

  // 搜索
  $('.search_btn').on('click', function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $(this).siblings('.search_form').css({transform: 'rotateX(0deg)'});
    }else{
      $(this).siblings('.search_form').css({transform: 'rotateX(90deg)'});
    }
  })

  // 手机端menu按钮
  $('.mob_menu').on('click', function(){
    $(this).toggleClass('icon-cross');
    $('.nb_nav').toggleClass('hover');
  })

  // 首页推荐产品js
  if(screen.width > 1500){
    $('.pro_slide').bxSlider({
      slideWidth: 272,
      maxSlides: 5,
      moveSlides: 5,
      startSlide: 1,
      slideMargin: 36,
      auto: true,
      autoControls: false,
      pager: true,
      controls: true,
      speed: 600,
    })
  }else if(screen.width > 1100){
    $('.pro_slide').bxSlider({
      slideWidth: 239,
      maxSlides: 5,
      moveSlides: 5,
      startSlide: 1,
      slideMargin: 24,
      auto: true,
      autoControls: false,
      pager: true,
      controls: true,
      speed: 600,
    })
  }else if(screen.width > 850){
    $('.pro_slide').bxSlider({
      slideWidth: 200,
      maxSlides: 3,
      moveSlides: 3,
      startSlide: 1,
      slideMargin: 24,
      auto: true,
      autoControls: false,
      pager: true,
      controls: true,
      speed: 600,
    })
  }else if(screen.width > 550 ){
    $('.pro_slide').bxSlider({
      slideWidth: 200,
      maxSlides: 3,
      moveSlides: 3,
      startSlide: 1,
      slideMargin: 24,
      auto: true,
      autoControls: false,
      pager: true,
      controls: true,
      speed: 600,
    })
  }else if(screen.width > 400 ){
    $('.pro_slide').bxSlider({
      slideWidth: 220,
      maxSlides: 2,
      moveSlides: 2,
      startSlide: 1,
      slideMargin: 24,
      auto: true,
      autoControls: false,
      pager: true,
      controls: true,
      speed: 600,
    })
  }else{
    $('.pro_slide').bxSlider({
      slideWidth: 230,
      maxSlides: 1,
      moveSlides: 1,
      startSlide: 1,
      slideMargin: 24,
      auto: true,
      autoControls: false,
      pager: true,
      controls: true,
      speed: 600,
    })
  }



})