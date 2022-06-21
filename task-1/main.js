const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    var n = parseInt(result.input); // 9
    let res = 0
while(n > 0){
    res = res + n % 10
    n = parseInt(n / 10)

}console.log(res);
});
