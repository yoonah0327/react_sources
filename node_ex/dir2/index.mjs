//express module

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; //현재모듈의 파일과 디렉토리경로를 설정시 사용.
// cors 문제 해결용
import cors from 'cors'; //<- 1 cors
const app = express();
app.use(cors()); // <- 2 cors

//--------------------------------------
//환경변수 PORT가 존재하면 그 값을 사용하고, 아니면 3000사용하겠다는 의미.
app.set('port', process.env.PORT || 3000);

// 현재 폴더를 지정 : __dirname을 ECM(ECMAScript Module)환경에서 사용하기
const __filename = fileURLToPath(import.meta.url); //현재 실행중인 파일경로
const __dirname = path.dirname(__filename); //현재 실행 중인 폴더 경로
//----------------------------------

//app.get(요청, 라우팅처리)
app.get('/', function(req, res){
    res.send('아우넘졸리다 으악❄️❄️');
});

app.get('/java', function(req, res){
    res.send('<h2>Hello! Welcome to JAVA World!</h2>');
});

app.get('/node', function(req, res){
    res.send('<a href="https://naver.com">네이버</a>');
});

app.get('/abc', function(req, res){
    res.sendFile(path.join(__dirname, 'abc.html')); //현재 폴더의 abc.html호출
});

app.get('/json', (req, res) => {
    res.send({'이름':'홍길동'}); 
});

// 요청명?변수=값 인 경우 req.query로 받음.
// url 경로에 정보가 담긴경우 추출 http://localhost:3000/singer/bts/7
app.get('/user/:bun/:irum', (req, res) => {
    const {bun, irum} = req.params;

    res.json({bun, irum}); 
});
//http://localhost:3000/user/winter
app.get('/user/:season', (req, res) => {
    const {season} = req.params;

    if(season === 'summer'){
        res.json({'season':'더위'});
    }else if(season === 'winter'){
        res.json({'season':'추위'});
    }else{
        res.json({'season':'서늘'});
    }
});

app.get('/test',  (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html')); //현재 폴더의 abc.html호출
});




//console.log('3000번 포트사용 서버 서비스 시작~~');
//app.listen(3000);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번을 사용해 서버서비스중');
});
