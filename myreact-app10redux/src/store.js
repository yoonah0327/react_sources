import { legacy_createStore as createStore } from "redux";

//createStore는 인자가 2개. 리듀서함수,리덕스dv툴스지정 
//리듀서함수: 어플리케이션 상태를 변환하는 함수. A상태>B상태. state와 action을 전달받아 상태변환 후 반환해준다.
//하는일 1) action type분석. 2) 이전상태>다음상태로 교체. 3) 다음상태 반환.
export default createStore(function(state, action){
    // state: 데이터. action: 데이터에 가해지는 행위.z
    if(state === undefined){
        return {number:0} // number 초기화
    }
    if(action.type === 'INCREMENT'){ // 액션의 타입이 'INCREMENT'일 경우 상태를 업데이트
        // 구조 분해 연산자를 사용하여 기존 상태를 복사하고, number 속성만 변경한다
        return {...state, // 기존 상태의 모든 속성을 복사합니다.
            number:state.number + action.size} //// number 속성만 업데이트합니다.
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()) 

//createStore 두번째 매개변수는 redux_devtools를 사용하기 위한 지정값.