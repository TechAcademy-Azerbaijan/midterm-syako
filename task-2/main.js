const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    var n = parseInt(result.input); // 9
    let max = 0
    let num = 0
while(n > 0){
    num = n % 10
    if(num > max){
        max = num
    }
    n = parseInt(n / 10)
}console.log(max*max);

});
