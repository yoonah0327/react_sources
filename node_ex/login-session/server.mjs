import express from 'express';
import session from 'express-session'; //세선모듈
import bodyParser from 'body-parser'; // 요청 본문 파싱용
import path from 'path'; //경로조장
import { fileURLToPath } from 'url'; //url을 파일경로로 변환

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

//bodyParser.urlencoded() 미들웨어 설정. 주로 전송된 폼데이터를 파싱
app.use(bodyParser.urlencoded({extended:true})) //데이터 파싱방법결정

//session 미들웨어 설정
app.use(session({
    secret:'secret-key', //세션암호화를위한 비밀키 설정
    resave:false, //세션이 수정되지 않은 경우에도 세션을 다시 설정유무.
    saveUninitialized:true, //초기화된 않은 저장 여부
    cookie:{maxAge:30 *60 *1000} //30분. 세션유효시간
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const auth = {
    id:'kor',
    password:'111'
};

app.get('/', (req, res) => { //root로 접속하면
    res.sendFile(path.join(__dirname, 'login.html')); //로그인 페이지 호출

});

app.post('/login', (req, res) => { //root로 접속하면
    const {id, password} =req.body;

    if(id === auth.id && password === auth.password){
        req.session.user = id; //세션에 사용자 id를 저장
        res.redirect('/main'); //로그인 성공시 메인 페이지로 리다이렉션
    }else{
        res.send('로그인 실패 <a href='/'>다시 시도</a>');
    }
});

app.get('/main', (req, res) => {
    //사용자가 로그인 한 경우에 main.ejs파일을 호출
    if(req.session.user) {
        res.render('main', {sessionID:req.sessionID})
    }else{
        res.send('접근권한이 없음. <a href='/'>로그인</a>');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => { //세션삭제
        if(err){
            return res.redirect('/main');
        }
    })
    res.clearCookie('connect.sid'); //sid: 세션아이디. 세션쿠키도 삭제.
    res.redirect('/');

});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}로 서비스 시작~~`);
})

