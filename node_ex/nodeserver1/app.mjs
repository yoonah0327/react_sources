import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import gogekRouter from './routes/gogek.mjs';
import jikwonRouter from './routes/jikwon.mjs';

const app = express();

app.use(cors()) // cors 미들웨어 등록: cors해킹에서 벗어날 수 있다. for service.
app.use(express.json()); // express.join 미들웨어: json 파싱용
// 예: 클라이언트가 json 데이터를 요청(post)으로 보낼때 
//{"name":"tom", "age":30} 를 자동으로 파싱해 req.body 객체를 만듦.
// req.body.name 또는 req.body.age로 접근이 가능해짐. 
app.set('port', process.env.PORT || 3000);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//정적 파일 제공 폴더 정의
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send('good');
// });

//라우팅작업. 따로 만들어서 호출.
app.use('/', jikwonRouter);
app.use('/gogek', gogekRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트로 서버서비스 중..');
});
