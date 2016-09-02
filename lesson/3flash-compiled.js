var express = require('express');
var session = require('express-session');
var flash = require('flash');
var app = express();
//app.use(flash());

/*
*  req.flash('success','su1')  ����Ϣд��session����
*
*
*  req.flash('success')  һ������ ȡһ����Ϣ  ������������  ��������д�˼��� һ�ζ�����
*
*  ������֮�� ������
* */

/*  �Լ�ʵ��flash ����*/
app.use(function (req, res, next) {
    req.flash = function (type, mes) {
        /*  ���԰������ͽ����������ۼ�  ��ͬ���Ͳ�ͬ����  */
        if (mes) {
            /* ��mes  ��ֵ  ��������*/
            var message = req.session[type];
            /* �ж��Ƿ��д� ����   */
            if (message) {
                message.push(mes);
            } else {
                req.session[type] = mes;
            }
        } else {
            /*  ûmes  ȡֵ*/
            // return req.session[type];
            var message = req.session[type];
            delete req.session[type]; /*  flash ȡ��һ�ξͶ�������  �������� */
            return message;
        }
    };
    next();
});

app.get('/w', function (req, res) {
    req.flash('su', '111');
    res.redirect('/r');
});
app.get('/r', function (req, res) {
    req.flash('su');
    res.send('got');
});

app.listen(5005);

//# sourceMappingURL=3flash-compiled.js.map