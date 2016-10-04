var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({
    secret: 'test',
    resave: true,
    saveUninitialized: true
}));
var sess;
app.get('/', function (req, res ) {
    sess = req.session;
    res.sendfile('./views/login.html');

});
app.get('/logined', function (req, res) {
    sess = req.session;
    if (!req.query.username || !req.query.uesrpassword) {
        res.send('login failed');
    }else if(req.query.username === "amy" && req.query.uesrpassword === "amyspassword"){
        sess.user = req.query.username ;
        sess.admin = true;
        res.sendfile('./views/logined.html');

        console.log("login success!");
    }else{
        res.send('login username or password is wrong');
    }

    console.log(sess.user);
    // sess.uesrpassword=req.query.uesrpassword;
});

app.get('/logout', function (req, res ) {
    sess = req.session;
    console.log("1"+sess.user);
    sess.destroy();
    res.end("logout!");
    console.log("2"+sess.user);
});
app.listen(3000);
console.log("app running at http://localhost:3000");
