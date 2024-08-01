import React, {Component} from "react";
import AddNumber from "./AddNumber";

export default class AddNumberSuper extends Component{
    render(){
        return(
            <div id="super">
                <h2>Add Number Super</h2> {/* onClick이라는 속성*/}
                {/*addnumber의 props로 매개변수가 size인 함수를 전달함.
                    이 함수는 addnumber의 +버튼을 클릭했을때 addnumber의 state.size값을 호출.
                    이 size값을 다시 상위컴포넌트 App으로 전달하고자
                    상위 컴포넌트로부터 전달받은 props의 onClick함수를 호출해서 
                    size 값을 전달해야한다.
                */}
                {/* 
                <AddNumber onClick={function(siz){
                    this.props.onClick(siz);
                }.bind(this)}></AddNumber
                */}
                <AddNumber></AddNumber>
            </div>
        );
    }
}
