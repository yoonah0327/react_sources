import './App.css';
import React, {Component} from 'react';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/showNumberSuper';


class App extends Component {
  state = {number:0}

  render(){
    return (
      <div className="App">
       <h1>Main</h1>
       {/*App소유 state변수 number + size(=addnumbersuper가 전달한 값) */}
       {/* 
       <AddNumberSuper onClick={function(ss){
        this.setState({number:this.state.number + ss})
       }.bind(this)}></AddNumberSuper>
       App의 number : {this.state.number}
       <ShowNumberSuper numb={this.state.number}></ShowNumberSuper>
       */}
       {/* onclick이라는 props으로 끌어올려 받음. 
       App이 받아 이걸 상단 number: {}로 찍어보았다.
      이제 numb라는 props로 다시 내려보내자*/}

      <AddNumberSuper></AddNumberSuper>
      <ShowNumberSuper></ShowNumberSuper>
      </div>
    );
  }
}

export default App;
