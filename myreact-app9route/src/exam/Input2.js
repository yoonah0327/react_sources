import React, {useState} from "react";

const Input2 = () => {
    const [params, setParams] = useState({
        irum: '',
        nai: '', 
        juso: ''
    });

    const {irum, juso, nai} = params;

    const changeFunc = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setParams({ //js 연산자
            ...params, 
            [id]:value //에러방지용으로 작성. ?
        })

    }
  
    return(
        <div>
            <br/>
            <div>
                <lable for = "irum">이름: </lable>
                <input type="text" value={irum} id="irum" onChange={changeFunc}/>
            </div>  
            <div>
                <lable for = "nai">나이: </lable>
                <input type="text" value={nai} id="nai" onChange={changeFunc}/>
            </div>  
            <div>
                <lable for = "juso">주소: </lable>
                <input type="text" value={juso} id="juso" onChange={changeFunc}/>
            </div>  
        <br/>
        <h3>처리 결과</h3>
        <table>
        <tr>
            <td>이름은 {irum}</td>
            <td>나이는 {nai}</td>
            <td>주소는 {juso}</td>
        </tr>
        </table>
        </div>
    );
}

export default Input2;