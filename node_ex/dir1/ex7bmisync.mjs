// BMI 동기 방식으로 처리
// readline-sync 모듈을 설치 후 사용 npm install readline-sync

import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync'); //동기방식을 도와준다. 순서대로 출력되게 해줌.

// 터미널 인코딩 작업 요.(window용)
if(process.platform === 'win32'){
    require('child_process').execSync('chcp 65001'); //터미널의 코드 페이지를 utf-8로 설정 
}

//BMI 판정 기준 함수 작성
const getBmiCategory = (bmi) => {
    if(bmi < 18.5) return '저체중';
    if(bmi >= 18.5 && bmi < 23) return '정상';
    if(bmi >= 23 && bmi < 25) return '비만전단계';
    if(bmi >= 25 && bmi < 30) return '1단계 비만';
    if(bmi >= 30 && bmi < 35) return '2단계 비만';
    return '3단계 비만';
}

console.log('키 입력 받기');
const height = readlineSync.question('키(cm 단위): ');
console.log(`입력받은 키: ${height}`);

console.log('몸무게 입력 받기');
const weight = readlineSync.question('몸무게(kg 단위): ');
console.log(`입력받은 몸무게: ${weight}`);

const heightMeter = parseFloat(height) / 100; // cm to meter 
const weightKg = parseFloat(weight);

console.log('BMI계산');
//bmi 계산
const bmi = weightKg / (heightMeter * heightMeter);
const category = getBmiCategory(bmi);
console.log(`당신의 BMI지수는 ${bmi.toFixed(2)}이고 체질량 지수는 ${category}`);
console.log('\n❄️동기 처리');