$(function(){

  // 多语言
  $('.language span').on('click', function(){
    $('.en_dp').slideToggle();
  })

  // 导航菜单按钮
  $('.menu_links').on('click', function(){
    $(this).toggleClass('icon-cross');
    $(".nb_items").toggleClass('active');
    if($(this).is('.icon-cross')){
      // $('.nb_items').css({background: '#0056f9'});
      $('.logo>img').attr('src', 'images/logo1.png');
    }else{
      // $('.nb_items').removeAttr('style');
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


  //产品详情图片切换
  $('.small_pic').on('click', function(){
    var img = $(this).find('img').attr('src');
    $(this).addClass('current').siblings().removeClass('current');
    $('.big_pic>img').attr('src', img);
  })
  $('.small_pic').on('mouseenter', function(){
    var img = $(this).find('img').attr('src');
    $(this).addClass('current').siblings().removeClass('current');
    $('.big_pic>img').attr('src', img);
  })


  // 页脚分类点击
  $('.fl_tit').on('click', function(){
    $(this).siblings('.fot_link_box').slideToggle();
  })


})