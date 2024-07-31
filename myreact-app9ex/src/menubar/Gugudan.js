import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 가져오기

const Gugudan = () => {
    const [inputValue, setInputValue] =useState(''); 
    const [guguDan, setGuguDan] = useState([]);

    //입력한 값 받기
    const getgugu = (e) => {
        setInputValue(e.target.value);
    }

    //구구단 계산 및 출력
    const guguFunc = () => {
        const num = inputValue;
        const results = [];
        for(let g =1; g<10; g++){
            results.push(`${num} * ${g} = ${num*g}`);
        }
        setGuguDan(results);
    }

    
    return(
        <div>
            <br/>
            단 입력 : <input type="number" value={inputValue} onChange={getgugu}/>
            <button className="btn btn-outline-info" onClick={guguFunc}>확인</button>
            <br/>
            <h3>구구단</h3>
            <ul className="list-group mt-2">
            {guguDan.map((result, index) => (
                <li className="list-group-item" key={index}>{result}</li>
            ))}
            </ul>
        </div>
    );
}

export default Gugudan;
//입력 값의 변경과 구구단 계산을 한 함수로 처리할 수 있습니다. 이는 코드의 가독성을 높이고 관리하기 쉽게 만들 수 있습니다.
//장점: 코드 간결성. 일관성: 입력 값이 변경되면 자동으로 구구단을 업데이트하는 방식으로, 사용자 입력에 대한 응답성을 높일 수 있습니다.
//단점: 가독성_ 한 함수에서 너무 많은 작업을 처리하면 코드가 복잡해질 수 있습니다. 특히 큰 함수는 유지보수가 어려울 수 있습니다.
//단점: 성능_ 입력값이 변경될 때마다 구구단 계산을 수행하면 불필요한 계산이 발생

//부트스트랩 적용해보기


