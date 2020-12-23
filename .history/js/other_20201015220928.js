$(function(){

  // 多语言
  $('.language span').on('click', function(){
    $('.en_dp').slideToggle();
  })

  // 导航菜单按钮
  $('.menu_links').on('click', function(){
    $(this).toggleClass('icon-cross');
  })

  // 手机端menu按钮
  $('.mob_menu').on('click', function(){
    $(this).toggleClass('icon-cross');
    $('.nb_nav').toggleClass('hover');
  })


})