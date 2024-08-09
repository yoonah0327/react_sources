//키보드로 단을 받아 구구단 출력

import { EventEmitter } from "events";
import readline from 'readline';

const myEvent = new EventEmitter(); //이벤트 객체 생성

//키보드 입력을 위한 readline 인터페이스 생성
// input 스트림에서 데이터를 읽고, output 스트림으로 데이터를 쓸 수 있게 함.
const inout = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const printGugu = (dan) => {
    console.log(`\n구구단 ${dan} 출력`);
    for (let index = 1; index <= 9; index++) {
        console.log(`${dan} x ${index} = ${dan * index}`);
    }
};

myEvent.on('gugu', (dan) => {
    printGugu(dan);
    inout.close();
})

//question(query, callback)
inout.question('출력할 단 입력:', (input) => {
    const dan = parseInt(input, 10);

    if(!isNaN(dan)) {//숫자가 들어온경우
        myEvent.emit('gugu', dan);
    }else{
        console.log('단은 숫자로 입력하시오');
        inout.close();
    }
});