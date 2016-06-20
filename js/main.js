// 回到顶部按钮的出现和隐藏
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600)
            $('.go-top').show();
        else
            $('.go-top').hide();
    });
    $('.go-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
    });
});
// 微信二维码的出现和隐藏
$(function() {
    $('.wx-box').bind('mouseover', function() {
        $("#wx-icon").show();
    });
    $('.wx-box').bind('mouseout', function() {
        $("#wx-icon").hide();
    });
});
//电话的出现和隐藏
$(function() {
    $('.phone-box').bind('mouseover', function() {
        $("#phone").show();
    });
     $('.phone-box').bind('mouseout', function() {
        $("#phone").hide();
    });
});