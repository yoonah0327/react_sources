const {odd, even} = require('./ex2_1');
const chkFunc = require('./ex2_2');

function chkString(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}
console.log(chkFunc(3)); //홀수
console.log(chkFunc(4)); //짝수
console.log(chkString("dog")); //홀수
console.log(chkString("kitten")); //짝수