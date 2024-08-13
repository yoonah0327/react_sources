import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url); //import.meta.url : 현재 파일의 경로
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors()); // cors 미들웨어 등록
app.use(express.json()); //express.json 미들웨어. json 파싱용.

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

let datas = [
    {id:1, name:'손오공', position:'자바개발'},
    {id:2, name:'저팔계', position:'웹퍼블리셔'}
]

let nextid= 3; //새로운 직원이 추가될때 id 증가용

app.get('/', (req, res) => {
    res.send('부릉부릉 시동을 걸어봅니다~ /emp, /emp/1, /abc.html');
});

//전체 자료 읽기
app.get('/emp', (req, res) => {
    res.json(datas);
})

//자료 1개 읽기
app.get('/emp/:id', (req, res) => {
    const employee = datas.find(emp => emp.id === parseInt(req.params.id, 10));
    if(!employee) return res.status(404).send('해당 자료는 존재하지 않습니다');
    res.json(employee);
})

//자료추가
app.post('/emp', (req, res) => {
    const newEmployee = {
        id:nextid++,
        name:req.body.name,
        position:req.body.position
    };
    datas.push(newEmployee);
    res.status(201).json(newEmployee);
})

// 자료 수정
app.put('/emp/:id', (req, res) => {
    console.log(req.body);

    const employee = datas.find(emp => emp.id === parseInt(req.params.id, 10));
    if(!employee) return res.status(404).send('해당 자료는 존재하지 않습니다');

    employee.name = req.body.name || employee.name; //새데이터있으면 그걸로 교체, 아니면 원래데이터로.
    employee.position = req.body.position || employee.position;

    res.json(employee);
})

// 자료 삭제
app.delete('/emp/:id', (req, res) => {
    console.log(req.params.id);

    const empIndex = datas.findIndex(emp => emp.id === parseInt(req.params.id, 10));
    if(empIndex === -1) return res.status(404).send('해당 자료는 존재하지 않습니다');

    const [delEmp] = datas.splice(empIndex, 1);
    res.json(delEmp);
})


app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트로 서버 서비스 시작중");
});
