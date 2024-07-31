import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MyTest from "./exam/Test";
import HiAbout from "./exam/About";
import Counter from "./exam/Counter";
import Input1 from "./exam/Input1";
import Input2 from "./exam/Input2";
import Multidata from "./exam/Multidata";
import MyAjax from "./exam/MyAjax";

function App() {
  return (
    <Router>
    <div className="App">
     <h2>라우트 연습용 메인 화면</h2>
    <MyTest/>
    <hr/>
    {/* 메뉴 작성 : 라우팅 연습*/}
    <nav>
      {/* Link 는 a 태그로 전환: 요청명 개념으로 이해. 요청을하는쪽*/}
      <Link to="/">Test 화면</Link> | 
      <Link to="/about">About 보기</Link> | 
      <Link to="/kkount">친구추가및삭제</Link> | 
      <Link to="/input1">자료입력1</Link> | 
      <Link to="/input2">자료입력2</Link> | 
      <Link to="/multi">배열자료</Link> | 
      <Link to="/ajax">Ajax 요청</Link>
    </nav>
{/* test화면 링크를 누르면, route path / 와 매핑되고, 실질적으로 실행될 컴포넌트는 element에 적혀있는 <MyTest>*/}

    <Routes>{/* 컴포넌트에서 동적 라우팅 구현 가. 요청을받는쪽 */}
      <Route path="/" element={<MyTest/>}></Route>
      <Route path="/about" element={<HiAbout/>}></Route>
      <Route path="/kkount" element={<Counter/>}></Route>
      <Route path="/input1" element={<Input1/>}></Route>
      <Route path="/input2" element={<Input2/>}></Route>
      <Route path="/multi" element={<Multidata/>}></Route>
      <Route path="/ajax" element={<MyAjax/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
