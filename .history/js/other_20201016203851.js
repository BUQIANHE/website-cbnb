$(function(){

  // 多语言
  $('.language span').on('click', function(){
    $('.en_dp').slideToggle();
  })

  // 导航菜单按钮
  $('.menu_links').on('click', function(){
    $(this).toggleClass('icon-cross');
    if($(this).is('.icon-cross')){
      $('.nb_items:before').css({background: '#0056f9'});
      $('.logo>img').attr('src', 'images/logo1.png');
    }else{
      $('.nb_items:before').removeAttr('style');
      $('.logo>img').attr('src', 'images/logo.png');
    }
    $('.menu_dp_items').slideToggle();
  })

  // 导航类别点击
  $('.nav_list').on('click', function(){
    $('.dp_mn').slideToggle();
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