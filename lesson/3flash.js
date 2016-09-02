var express = require('express');
var session=  require('express-session')
var flash=  require('flash');
var app =express();
//app.use(flash());

/*
*  req.flash('success','su1')  将消息写入session中了
*
*
*  req.flash('success')  一个参数 取一个消息  读到的是数组  无论上面写了几个 一次读出莱
*
*  读出来之后 清除掉
* */

/*  自己实现flash 功能*/
app.use(function (req,res,next) {
    req.flash =  function (type,mes) {
        /*  可以按照类型进行数组的累加  不同类型不同数组  */
        if(mes){  /* 有mes  赋值  保存数据*/
            var message =   req.session[type];
            /* 判断是否有此 数据   */
            if(message){
                message.push(mes)
            }else{
                req.session[type] = mes;
            }
        }else{
            /*  没mes  取值*/
           // return req.session[type];
            var message =   req.session[type];
            delete   req.session[type];  /*  flash 取出一次就读不到了  清除数据 */
            return message;
        }
    };
    next();
})



app.get('/w', function (req,res) {
    req.flash('su','111');
    res.redirect('/r')
})
app.get('/r', function (req,res) {
    req.flash('su');
    res.send('got')
})

app.listen(5005);