const userLoginView = require('../views/userlogin.html');

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