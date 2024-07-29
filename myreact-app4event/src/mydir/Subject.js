import React, {Component} from "react";

class Subject extends Component{
    render(){
        const clickHandler = () => {
            console.log('두번째 버튼 클릭 성공');
        }

        const keyUpHandler = (e) => { //텍스트박스의 keyUp 이벤트 핸들러
        console.log('텍스트 키업 이벤트 성공');
        console.log('입력한 값: ', e.target.value);
        }

        return(
            <header>
                <h1>머리글: {this.props.title}</h1>
                {this.props.subtitle}
                <br/>
                button 이벤트:
                <br/>  
                <button onClick={function(){
                    this.props.changePage();
                }.bind(this)}>{this.props.subtitle}</button>
                <br/><br/>
                <button onClick={clickHandler}>두번째 버튼</button>
                <br/><br/>
                <input type="text" onKeyUp={keyUpHandler}/>

            </header>
        );
    }

}

export default Subject;