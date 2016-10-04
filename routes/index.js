/**
 * Created by RufusLiu on 2016/10/3.
 */


//首頁login
exports.login = function(req, res){
    res.render( 'login.html', {
        title : '登入首頁'
    });
};

//登入頁面logined
exports.logined = function(req, res){
    res.render( 'logined', {
        title : '登入後的頁面'
    });
};