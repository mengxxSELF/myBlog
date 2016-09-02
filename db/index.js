var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId;

var settings = require('../settings')

mongoose.connect(settings.dbUrl);  /*   ����������  */

/* �û���ģ�͹Ǽ�  ���弯�ϵ��ֶκ�����  */
var UserSchema = new mongoose.Schema({
    username:'String',
    password:'String', /*  ��ҪMD5����*/
    email:'String',
    avatar:'String', /* ͷ��*/
})
var UserModel = mongoose.model('User', UserSchema);


var ArticleSchema = new mongoose.Schema({
    title:'String',
    content:'String',
    user:{type:ObjectId,ref:'User'},  /* ���� ��  ������һ�� */
    pv:{type:Number,default:0} , /* ��������� */
    /* ���������ֶ� */
    comments:[{user: {type:ObjectId,ref:'User'} , createAt:{type:Date,default:Date.now()} , content:String}],
    createAt:{type:Date,default :Date.now()} /* ����ʱ�� Ĭ�ϵ�ǰʱ��*/
})
var ArticleModel = mongoose.model('Article',ArticleSchema)


/* ȫ�ֶ����Ϲ���һ���������� */
global.Model = function (modelName) {
    return mongoose.model(modelName)
}



















