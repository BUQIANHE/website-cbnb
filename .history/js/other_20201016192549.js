$(function(){

  // 多语言
  $('.language span').on('click', function(){
    $('.en_dp').slideToggle();
  })

  // 导航菜单按钮
  $('.menu_links').on('click', function(){
    $(this).toggleClass('icon-cross');
    $('.menu_dp_items').slideToggle();
  })

  // 导航类别点击
  $('.nav_list').on('click', function(){
    $(this).toggleClass("is_list").siblings().removeClass('is_list');
    if($(this).is('.is_list')){
      $('.dp_mn').slideToggle();
    }
  })

  // 手机端menu按钮
  $('.mob_menu').on('click', function(){
    $(this).toggleClass('icon-cross');
    $('.nb_nav').toggleClass('hover');
  })




  // 页脚分类点击
  $('.fl_tit').on('click', function(){
    $(this).siblings('.fot_link_box').slideToggle();
  })


})