import React,{useState} from "react";
import Child from "./mydir/Child";


function App() {
  //App 컴포넌트가(함수)가 호출될때 함수내의 내용을 차례대로 수행(=렌더링).
  //리액트는 부모컴포넌트가 렌더링될때 자식컴포넌트 또한 렌더링된다.
  //성능 최적화를 목적으로 컴포넌트에서 필요한상황에서만 자식 컴포넌트가 리렌더링에 참여할수있도록
  //React.memo함수를 제공한다.

  const [fatherAge, setFatherAge] = useState(45);
  const [childAge, setChildAge] = useState(10);

  const changeFatherAge = () => { //아빠나이 변경 이벤트핸들러
    setFatherAge(fatherAge +1);
  }
  const changeChildAge = () => { //자녀나이 변경 이벤트핸들러
    setChildAge(childAge +1);
  }

  console.log('아빠 나이가 변경됨 - 렌더링');

const boxstyle = {border:'2px solid', padding:'10px'}
  return (
    <div style={boxstyle}>
      <h2>👨아빠(신기루)👨</h2>
      <span>나이: {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changeFatherAge}>아빠나이+1</button>
      <hr/>
      <Child irum={'신둘째'} nai={childAge} />
      <button onClick={changeChildAge}>자녀나이+1</button>
    </div>
  );
}

export default App;
