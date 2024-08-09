//동기와 비동기 메소드
//setTimeout 등은 비동기 처리를 한다. fs 모듈의 경우도 그러한 메소드를 많이 가지고있다.
//fs모듈은 비동기 처리가 기본

import {readFile} from "fs";

readFile('./ex3write.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
});
readFile('./ex3write.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
});
readFile('./ex3write.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
});
console.log();
//동기 : 1번완료후 2번완료후 3번. 비동기: 1번호출후 반환을 기다리지 않고 다른작업(예를들어 3번호출등)을 수행.
