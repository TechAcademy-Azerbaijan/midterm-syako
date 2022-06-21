const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    var n = parseInt(result.input); // 9
    let i
for(i = 1 ; i <= n ; i++){
if( n % i == 0 && i % 2 > 0 ) {console.log(i);}   
}
});
