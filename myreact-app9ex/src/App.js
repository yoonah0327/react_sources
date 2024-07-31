import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 가져오기


import Main from "./menubar/Main";
import Gugudan from "./menubar/Gugudan";
import JikwonAjax from "./menubar/JikwonInfo";

function App() {
  return (
    <Router>
      <div className="container mt-4">
      <h2 className="mb-4">라우팅 문제</h2>
      <nav className="nav nav-tabs">
        <div className="nav-item">
        <Link className="nav-link" to ="/">메인화면</Link> 
        </div>
        <div className="nav-item">
        <Link className="nav-link" to ="/gugu">구구단</Link>
        </div>
        <div className="nav-item">
        <Link className="nav-link" to ="/jikwon">직원정보(ajax)</Link>
        </div>
      </nav>
      <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/gugu" element={<Gugudan/>}></Route>
      <Route path="/jikwon" element={<JikwonAjax/>}></Route>
      </Routes>
      </div>

    </Router>
    
  );
}

export default App;
