import React, {useState} from 'react';
/*
function HookTest(){
}
*/
// 위 아래  같은 코드.

//Hook: class없이 function으로, 상태값(state)과 생명주기기능(lifecycle feature) 사용가능.
//함수형 컴포넌트로 상태값과 자식요소 접근이 가능.
const HookTest = () => {
    // 형식: const/let  [state, setState] = useState(initialState);
    //                  데이터, 데이터변경함수          초기값
    const [count, setCount] = useState(0);

    return(
        <div>
        number : {count} &nbsp; 
        <button onClick={() => setCount(count +1)}>증가2</button>
        </div>
    );
};

export default HookTest; //이래야 다른 js에서 import 가.

