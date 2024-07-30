import Clock1 from "./exam/Clock1";
import Clock2 from "./exam/Clock2";
import Clock3 from "./exam/Clock3";
import MyComponent from "./exam/myComponent";
import MyComponent2 from "./exam/myComponent2";
import MyForm from "./exam/MyForm";

function App() {
  return (
    <>
      <h2>리액트 생명주기 연습용 : 디지털시계</h2>
      <Clock1></Clock1>
      <hr/>
      <Clock2></Clock2>
      <hr/>
      <Clock3></Clock3>
      <hr/>
      <MyComponent></MyComponent>
      <hr/>
      <MyComponent2></MyComponent2>
      <hr/><hr/>
      Form작업(생명주기와 상관무.)<br/>{/* 사용자와 웹 페이지 간 상호 작용 */}
      <MyForm/>
    </>
  );
}

export default App;
