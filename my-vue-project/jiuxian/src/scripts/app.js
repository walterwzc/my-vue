const UserController = require('./controllers/UserController');


// 初始化页面：
var $fullText = $('.admin-fullText');
$('#admin-fullscreen').on('click', function () {
    $.AMUI.fullscreen.toggle();
});

$(document).on($.AMUI.fullscreen.raw.fullscreenchange, function () {
    $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
});

// ==========================
// 侧边导航下拉列表
// ==========================

$('.tpl-left-nav-link-list').on('click', function () {
    $(this).siblings('.tpl-left-nav-sub-menu').slideToggle(80)
        .end()
        .find('.tpl-left-nav-more-ico').toggleClass('tpl-left-nav-more-ico-rotate');
})
// ==========================
// 头部导航隐藏菜单
// ==========================

$('.tpl-header-nav-hover-ico').on('click', function () {
    $('.tpl-left-nav').toggle();
    $('.tpl-content-wrapper').toggleClass('tpl-content-wrapper-hover');
})



// 主页面登录渲染：
UserController.render();

// 处理登录页面
UserController.doLoginPage();

// 处理注册页面
UserController.doSignupPage();
