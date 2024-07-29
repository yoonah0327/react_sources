import React, {useState} from "react";
import Subject from "./mydir/Subject";
import Funnc from "./mydir/Func";

//const App = () => {
function App() {
  const[subject, setSubject] = useState({title: '웹문서', subtitle: '리액트만세'});
  const[friends] = useState([
    {bun:1, irum:'관우', nai:33},
    {bun:2, irum:'장비', nai:23}
  ]);

  const handleChangePage = () => {
    //friends 배열 값 콘솔에 출력
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum}님 나이는 ${friend.nai}세입니다.`)
    });

    setSubject(prevSubject => ({ //이전 상태인 prevSubject(subject)를 받아 변환
      ...prevSubject,
      title:'버튼에 의해 제목 변경'
  
    }));
  }


  return (
    <div className="App">
      이벤트 연습<br/>
      <Subject 
        title = {subject.title}
        subtitle = {subject.subtitle}
        changePage = {handleChangePage}
      />
    {/* title, subtitle, changePage : App에서 Subject 컴포넌트로 전달되는 props */}

    <br></br>
    <Funnc 
     subtitle = {subject.subtitle}
     friends = {friends}
     changePage = {handleChangePage}
    />
    </div>
  );
}

export default App;
