import React,{memo} from "react";

const boxstyle = {border:'2px dotted green', padding:'20px'}

//function Child({irum, nai}){...}
const Child = ({irum, nai}) => {
    console.log('오! 자녀나이바뀜(렌더링)');

    return(
        <div style={boxstyle}>
            <h3>👧자녀1👧</h3>
            <p>이름: 신첫째</p>
            <p>나이: 13세</p>
            <h3>👦자녀2👦</h3>
            <p>이름: {irum}</p>
            <p>나이: {nai}세</p>

        </div>
    );

}

//export default Child;
export default memo(Child); //반환컴포넌트를 memo함수로 감싸주면 memo기능이 활성화된다.