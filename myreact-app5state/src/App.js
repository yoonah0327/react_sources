// /* eslint-disable*/
import './App.css';
import React, { useState } from 'react';


function App() {
  //일반 데이터
  let irum = 'YA의 JSX 사용법: 일반데이터';

  //state 데이터
  let [jemok, setJemokFunc] = useState('자VA스크립트'); //문자열 기억
  let [jemok2, setJemokFunc2] = useState(['리Act', '뷰']); //배열 자료 기억

  //이벤트 처리 함수1  //함수내함수 가. inner function.
  function dataUpdate(){
    let newArr = [...jemok]; //전개연산자에 의해 문자열이 낱개 문자로 분리돼 배열로 복사
    //console.log(newArr); //(7) ['자', 'V', 'A', '스', '크', '립', '트']
    jemok = '리액트 연습하기';
    setJemokFunc(jemok); //jemok state는 setJemokFunc 함수로 값 수정
    console.log(jemok); //리액트 연습하기

  }

  function dataUpdate2(){
    let newArr = [...jemok2]; //배열의 일부수정을 위해 전개연산자로 복사
    console.log(newArr);
    newArr[1] = "뷰뷰뷰" //newArr[1]값 변경
    setJemokFunc2(newArr); //jemok2 값을 변경하기 위해 setJemokFunc2 함수 사용
  }

  // 이벤트처리 2
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className= 'pink_bar'>
      <h1>리액트 STATE 이해 </h1> {/*supported by HOOK*/}
      </div>
      <div className='list'>
      <h3>{jemok}</h3>
      <span>{irum}</span><br/>
      <p>state 확인</p>
      <button onClick={dataUpdate}>jemok 값 변경</button>
      <hr/>
      </div>

      <div className='list'>
      <h3>jemok2[0]: {jemok2[0]}</h3>
      <h3>jemok2[1]: {jemok2[1]}</h3><br/>
      <p>state 확인</p>
      <button onClick={dataUpdate2}>jemok2 값 변경</button>
      <hr/>
      </div>

      <div>
        이모티콘 클릭: <span onClick={
          () => {setCount(count + 1)}}>🐥🐥🐥</span>{count}번 클릭

      </div>
    </div>
  );
}

export default App;
