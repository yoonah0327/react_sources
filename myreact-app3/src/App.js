import './App.css';
import MyName from './mydir/MyName';

function App() {
  return (
    <div className="App">
      메인<br/>
       컴포넌트에서 사용하는 데이터는 props와 state 두개가 있다.<br/>
       props: 부모 컴포넌트가 자식컴포넌트에 주는 값. 일방향<br/>
       state: 컴포넌트 내부에서 선언. 내부에서 값 변경가능<br/>
       props state 값이 변경되면 컴포넌트는 rerendering된다. <br/>
       <hr></hr>
       <MyName />
       <br/>
       <MyName name="소나기" /* name이라는 props값 전달 */ />



    </div>
  );
}

export default App;
