/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const UserController = __webpack_require__(1);


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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const userLoginView = __webpack_require__(2);

const wsCache = new WebStorageCache();

const auth = () => {
    return $.ajax({
        url: 'api/users/issignin',
        headers: {
            'X-Access-Token': wsCache.get('token')
        },
        success: (result) => {
            return result;
        }
    });
}

const render = async () => {
    // const authResult = await auth();

    let loginTemplate = template.render(userLoginView, {
        issignin: false,
        username: 'Walter'
    });

    $('#fullscreenli').after(loginTemplate);

    // login
    $('#userLoginBtn').on('click', function() {
        location.href = 'pages/login.html';
    });

    // signup
    $('#userSignupBtn').on('click', function() {
        location.href = 'pages/signup.html';
    });
    // logout
    $('#userLogoutLi').on('click', () => {
        wsCache.delete('username');
        wsCache.delete('token');
        location.reload();
    });
}

const doLoginPage = () => {
    const username = $('#userLoginForm .username').val();
    const password = $('#userLoginForm .password').val();

    console.log(username, password);
}

const doSignupPage = () => {
    const username = $('#userSingupForm .username').val();
    const password = $('#userSingupForm .password').val();

    console.log(username, password);
}

module.exports = {
    auth,
    render,
    doLoginPage,
    doSignupPage
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<!-- 头像 -->{{if issignin}}<li class=\"am-dropdown\" data-am-dropdown data-am-dropdown-toggle>    <a class=\"am-dropdown-toggle tpl-header-list-link\" href=\"javascript:;\">        <span class=\"tpl-header-list-user-nick\">欢迎你，</span>        <span class=\"tpl-header-list-user-nick\" style=\"font-weight: bold;\">{{username}}</span>        <span class=\"tpl-header-list-user-ico\">            <img src=\"static/images/user01.png\">        </span>    </a>    <ul class=\"am-dropdown-content\">        <li>            <a href=\"#\">                <span class=\"am-icon-bell-o\"></span> 资料</a>        </li>        <li>            <a href=\"#\">                <span class=\"am-icon-cog\"></span> 设置</a>        </li>        <li id=\'userLogoutLi\'>            <a href=\"#\">                <span class=\"am-icon-power-off\" ></span> 退出</a>        </li>    </ul></li>{{/if}}{{if !issignin}}<!-- 登录 --><li class=\"am-hide-sm-only\">    <div class=\"am-topbar-right\">        <button class=\"am-btn am-btn-primary am-topbar-btn am-btn-sm\" id=\"userLoginBtn\">登录</button>    </div></li><!-- 注册 --><li class=\"am-hide-sm-only\">    <div class=\"am-topbar-right\">        <button class=\"am-btn am-btn-primary am-topbar-btn am-btn-sm\" id=\"userSignupBtn\">注册</button>    </div></li><!-- logout --><li>    <a href=\"###\" class=\"tpl-header-list-link\">        <span class=\"am-icon-sign-out tpl-header-list-ico-out-size\"></span>    </a></li>{{/if}}"

/***/ })
/******/ ]);