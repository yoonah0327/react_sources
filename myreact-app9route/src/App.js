import React from "react";
import MyTest from "./exam/Test";
import HiAbout from "./exam/About";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <h2>라우트 연습용 메인 화면</h2>
    <MyTest/>
    <hr/>
    {/* 메뉴 작성 : 라우팅 연습*/}
    <nav>
      {/* Link 는 a 태그로 전환: 요청명 개념으로 이해*/}
      <Link to="/">Test 화면</Link> |
      <Link to="/about">About 보기</Link> |
    </nav>
{/* test화면 링크를 누르면, route path / 와 매핑되고, 실질적으로 실행될 컴포넌트는 element에 적혀있는 <MyTest>*/}

    <Routes>{/* 컴포넌트에서 동적 라우팅 구현 가 */}
      <Route path="/" element={<MyTest/>}></Route>
      <Route path="/about" element={<HiAbout/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
