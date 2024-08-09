// readline 모듈의 question 메소드는 콜백함수를 사용해 비동기적으로 입력 처리함
import readline from "readline";

//BMI 판정 기준 함수 작성
const getBmiCategory = (bmi) => {
    if(bmi < 18.5) return '저체중';
    if(bmi >= 18.5 && bmi < 23) return '정상';
    if(bmi >= 23 && bmi < 25) return '비만전단계';
    if(bmi >= 25 && bmi < 30) return '1단계 비만';
    if(bmi >= 30 && bmi < 35) return '2단계 비만';
    return '3단계 비만';
}

//키보드 입력을 위한 readline 인터페이스 생성
// input 스트림에서 데이터를 읽고, output 스트림으로 데이터를 쓸 수 있게 함. 
const rdata = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

console.log('비동기 입력 시작'); 

//키 입력받기
rdata.question('키 (cm 단위): ', (height) => {
    // 몸무게 입력받기
    rdata.question('몸무게 (kg 단위): ', (weight) => {
        console.log(`입력받은 몸무게: ${weight}`);

        const heightMeter = parseFloat(height) / 100; // cm to meter 
        const weightKg = parseFloat(weight);

        //bmi 계산
        const bmi = weightKg / (heightMeter * heightMeter);
        const category = getBmiCategory(bmi);

        console.log(`당신의 BMI지수는 ${bmi.toFixed(2)}이고 체질량 지수는 ${category}`);
        rdata.close(); //생성한 인터페이스 닫기
    })
});

console.log('\n❄️비동기 처리');