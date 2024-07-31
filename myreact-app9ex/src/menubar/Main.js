import React from "react";
import pic from '../olaf.png';

const Main = () => {
    let st = {color: 'skyblue'}

    return (
    <div>
    <h3 style={st}>초기화면</h3>
    <img src = {pic} alt="첫번째 이미지"/>
    {/* img elements must have an alt prop*/}

    </div>
    );
    


}

export default Main;