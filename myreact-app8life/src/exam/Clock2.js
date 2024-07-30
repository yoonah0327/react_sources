import React from "react";

class Clock2 extends React.Component{
    //클래스형 컴포넌트는 props로 기본 constructor를 호출해야함.
    constructor(props){
        super(props)

        this.state = {date:new Date()} //state를 생성자에서 지정
    }
    //Mount: DOM 객체가 생성되고 브라우저에 나타나는 것
    //호출순서: constructor> getDerivedStateFromProps> render> componentDidMount

    showSigan(){
        this.setState({
            date:new Date()
        })
    }
    componentDidMount(){ //시스템에 의한 콜백
        //setInterval(): 일정시간간격을 두고 어떤 코드를 반복호출.
        this.timerID = setInterval(
            () => this.showSigan(),
            1000 //1초마다 호출
        );
    }
    //DOM에 렌더링 된 후 컴포넌트 출력 자료가 실행, 하단의 작업(예:타이머)을 하기에 용이하다.
    componentWillUnmount(){ //시스템에 의한 콜백
        //사용된 메모리등의 작업 마무리
        //SPA를 개발할때 메모리 누수(leak)를 방지하는 작업이 요
        clearInterval(this.timerID); //setInterval()해제
    }

    render(){

        return(
            <div>
                <h1>⏰째깍(클라스형)⏰</h1>
                <h2>{new Date().toLocaleTimeString()}입니다</h2>
                <h2>현재 시간은 {this.state.date.toLocaleTimeString()}</h2>

            </div>

        );
    }
}

export default Clock2;