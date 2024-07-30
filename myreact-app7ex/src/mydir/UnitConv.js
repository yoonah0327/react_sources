import React, {useState} from "react";
import './UnitConv.css';

const UnitConv = () => {
    //상태선언
    const [meter, setMeter] = useState(1);
    const [cm, setCm] = useState(100);

    //이벤트핸들러: 미터 입력 
    const inputMeter = (e) => {
        const value = e.target.value;
        setMeter(value);
       //변환된 센티미터값 설정
        setCm(value *100);

    }

    //이벤트핸들러: 센티미터 입력
    const inputCm = (e) => {
        const value = e.target.value;
        setCm(value);
       //변환된 센티미터값 설정
        setMeter(value /100);
    }

    return(
        <div className="container">
            <div className="input-group">
            <h3>미터</h3>
            <input type="number" value={meter} onChange={inputMeter}></input>
            </div>
            <div className="input-group">
            <h3>센티미터</h3>
            <input type="number" value={cm} onChange={inputCm}></input>
            </div>
        </div>

    );
}

export default UnitConv;