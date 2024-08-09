//http 모듈을 이용해 웹서버 구축가능
import http from 'http'; //웹 관련 모듈

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>환영합니다. 노드 서버 세상에 오신것을</h1>');
    res.write('반가워요');
    res.end('<p>Hello~</p>'); //응답종료
    //res.write('헬로헬로');
})
.listen(8080, () => {
    console.log('서버 서비스중...');
});