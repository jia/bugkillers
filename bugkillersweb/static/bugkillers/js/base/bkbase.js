/**
 * Created by dongbin on 2015/6/27.
 * bugkillers的js全局对象
 */
/**
 * 远程服务区ip
 * @type {string}
 */
//var remoteip = 'http://127.0.0.1:9081';
var remoteip = 'http://115.29.38.204:9081';

/**
 * 全局对象BK
 * 通过pages实现命名空间的不同来屏蔽js全局污染
 * @type {{}}
 */
var BK = {
    pages: [],
    tools: {},
    url: {
        registerPage: { //注册页面的url
            local: {
                backUrl: '/bugkillers/index/' //回到点击注册页的页面 默认是主页
            },
            remote: {
                registerUrl: remoteip + '/bugkillers/user/regist'
            }
        },
        loginPage: {//登录页面的url
            local: {
                registerUrl: '../register/',
                backUrl: '/bugkillers/index/' //回到点击注册页的页面 默认是主页
            },
            remote: {
                loginUrl: remoteip + '/bugkillers/user/login'
            }
        },
        indexPage: {//首页
            local: {},
            remote: {}
        },
        askPage: {
            local: {},
            remote: {}
        }
    }
};
/**
 * 数组工具对象
 * @constructor
 */
BK.tools.Array = function () {
};
BK.tools.Array.prototype.inArray = function (value) {
    var i;
    for (i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false
};

/**
 * 代码工具对象
 * @constructor
 */
BK.tools.Code = function () {
};
BK.tools.Code.prototype.getCodesHtml = function (codeText) {
    var codeCount = codeText.indexOf('```');//```是代码标识
    for (var i = 1; i <= codeCount; i++) {
        if ((i + 1) / 2 != 0) {//如果是奇数
            codeText = codeText.replace('```', '<pre>');
        } else {
            codeText = codeText.replace('```', '</pre>');
        }
    }


    return codeText;
};