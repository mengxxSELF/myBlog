exports.md5= function (str) {
    /*  md5 �� ����Ĳ�������  ���16�����ַ���*/
    return require('crypto').createHash('md5').update(str).digest('hex');
                         /*   ����MD5 �㷨  ����  ���  */
}