import React, {useState, useEffect} from 'react';
import '../App.css'
import pic1 from '../olaf.png';
/*
function HookTest(){
...
}
export default HookTest;
*/
//위아래 동일

export default function HookTest2(){
    const [item, setItem] = useState(0); //동적변수. 데이터수정시 함수를통해 수정.
    //const a = 1; //정적변수. 변수의 값을 직접 수정.

    const incrementItem = () => setItem(item +1); // 아이템증가함수
    const decrementItem = () => setItem(item -1); // 아이템감소함수

    useEffect(() => {
        let a = 1;
        console.log(a);  // 변수 a 사용
    }, []);
    
    //key: 'value' 형식의 json데이터
    let st = {color: 'skyblue', textAlign: 'center'}

    return(
        <div className='App'> {/* 이 부분이 css가 적용된것 */}
            <div>
            number: {item}&nbsp;
            <button onClick={incrementItem}>증가</button>&nbsp;
            <button onClick={decrementItem}>감소</button>
            </div>
            {/* css style 적용 : style 속성 값은 {key:'value'}안에 기입 */}
            <h1 className='blackbar'>리액트의 이해</h1> {/* class 속성을 통해 .css 파일에 스타일 작성 */}
            <h2 style={{color: 'pink'}}>ECMA에 대한 선행학습필요</h2> {/* 인라인방식 */}
            <h3 style={st}>CSS 적용방식에 대한 이해</h3> {/* 변수에 json타입으로 style 작성*/}

           {/* 이미지 적용1 : src 폴더 파일*/} 
           <div>
            <img src = {pic1} alt="첫번째 이미지"/>
           </div>

           {/* 이미지 적용2 : css파일의 background-image*/} 
           <div className='img_bg'></div>

           {/* 이미지 적용3 : public 폴더에 있는 파일*/} 
           <img src={`${process.env.PUBLIC_URL}/imgs/sun.png`} alt='public 폴더 이미지 읽기' />
        </div>
    );
}