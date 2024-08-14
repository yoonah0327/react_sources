import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import pool from './db.mjs';

const __filename = fileURLToPath(import.meta.url); //import.meta.url : 현재 파일의 경로
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors()); // cors 미들웨어 등록
app.use(express.json()); //express.json 미들웨어. json 파싱용.

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('자 그럼 요청을 해볼까요? 🐥/sangdata, 🐥/sangdata/2');
});

//전체자료읽기. read all
app.get('/sangdata', async(req, res) => {
    try {
        // MariaDB 연결 풀에서 DB 연결을 하는 비동기 함수
        const conn = await pool.getConnection(); //연결

        const rows = await conn.query("select * from sangdata"); //자료읽기
        conn.release(); //연결해제
        //db는 공유하기에, 필요할때만 연결하고 해제해야한다
        console.log(rows);

        res.json(rows);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
});
//자료1개읽기. read one
app.get('/sangdata/:code', async(req, res) => {
    const {code} = req.params;
    try {
        // MariaDB 연결 풀에서 DB 연결을 하는 비동기 함수
        const conn = await pool.getConnection(); //연결

        const rows = await conn.query("select * from sangdata where code=?", [code]);
        conn.release(); //연결해제
        //db는 공유하기에, 필요할때만 연결하고 해제해야한다

        if(rows.length === 0){
            return res.status(404).json({error:'해당 자료는 존재하지 않습니다'});
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
});

//insert(create)
app.post('/sangdata', async(req, res) => {
    const {code, sang, su, dan} = req.body;


    try {
        // MariaDB 연결 풀에서 DB 연결을 하는 비동기 함수
        const conn = await pool.getConnection(); //연결

        const result = await conn.query("insert into sangdata values(?,?,?,?)", [code, sang, su, dan]);
        conn.release(); //연결해제
        //db는 공유하기에, 필요할때만 연결하고 해제해야한다

        res.status(201).json({code, sang, su, dan}); //성공시
    } catch (err) {
        res.status(500).json({error:err.message}); //실패시
    }
});

//update
app.put('/sangdata/:code', async(req, res) => {
    const {code} = req.params;
    const {sang, su, dan} = req.body;

    try {
        // MariaDB 연결 풀에서 DB 연결을 하는 비동기 함수
        const conn = await pool.getConnection(); //연결

        const result = await conn.query("update sangdata set sang=?, su=?, dan=? where code=?", [sang, su, dan, code]);
        conn.release(); //연결해제
        
        if(result.affectedRows === 0){
            res.status(404).json({error:'수정할 자료가 없습니다'}); //실패시
        }


        res.json({code, sang, su, dan}); //성공시
    } catch (err) {
        res.status(500).json({error:err.message}); //실패시
    }
});

//delete
app.delete('/sangdata/:code', async(req, res) => {
    const {code} = req.params;

    try {
        // MariaDB 연결 풀에서 DB 연결을 하는 비동기 함수
        const conn = await pool.getConnection(); //연결

        const result = await conn.query("delete from sangdata where code=?", [code]);
        conn.release(); //연결해제
        
        if(result.affectedRows === 0){
            res.status(404).json({error:'삭제할 자료가 없습니다'}); //실패시
        }

        res.json({message:'delete success'}); //성공시
    } catch (err) {
        res.status(500).json({error:err.message}); //실패시
    }
});

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트로 서버 서비스 시작중");
});
  