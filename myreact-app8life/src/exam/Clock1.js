import React from "react";

class Clock1 extends React.Component{
    /* 의미없는 컨스트럭터
    constructor(props){
        super(props);
    };
    */

    render(){
        return(
            <div>
                <h1>⏰고정시계⏰</h1>
                <h2>지금은 {new Date().toLocaleTimeString()}</h2>
            </div>

        );
    }
}

export default Clock1;