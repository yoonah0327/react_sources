import React, {Component} from "react";
import store from "../store";

export default class AddNumber extends Component{
    state = {size:1}

    render(){
        return(
            <div>
                <h3>Add Number</h3>
                {/* +버튼 클릭시 size 값이 상위 컴포넌트로 전달될 수 있게 onClick을 구현.
                    props로 전달받은 onClick 함수를 호출. 현 컴포넌트의 state인 size값을 전달.
                    onClick=addnumber함수 이벤트핸들러. this.props.onClick= addnumbersuper함수.
                */}
                {/* 
                <input type="button" value="+" onClick={function(){ //+버튼클릭시 함수수행.
                    this.props.onClick(this.state.size); //부모의 온클릭메소드를 호출
                }.bind(this)}></input>
                */}

                {/* redux 사용 */}
                <input type="button" value="+" onClick={function(){
                   store.dispatch({type:'INCREMENT', size:this.state.size});
                }.bind(this)}></input>

                <input type="text" value={this.state.size} onChange={function(e){
                    this.setState({size:Number(e.target.value)});
                }.bind(this)}></input>
            </div>
        );
    }
}
