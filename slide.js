$(function () {
  var headerHight = 94;
  var speed = 1200;
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(".top").click(function () {
    var position = 0;
    $("html,body").animate({ scrollTop: position }, speed, "swing");

  });
  $('.drawer-menu a[href]').click(function () {
    $('#nav-input').prop('checked', false);
  });
});