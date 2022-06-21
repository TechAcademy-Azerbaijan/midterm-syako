const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    var n = parseInt(result.input); // 9
    let max = 0
let count = 0
while(n > 0){
    const num = n % 10
    if(num > max){
        max = num
        count = 1
    }
    else if(num == max){
        count++
    }
    n = parseInt( n / 10 )
}
if (count >= 2){
    console.log("YES");
}
else{
    console.log("NO");
}
});
