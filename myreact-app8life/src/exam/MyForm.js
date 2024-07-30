import { useState } from "react";

function MyForm(){
    const [formData, setFormData] = useState({
        irum:'',
        nai:'',
        menu:'파전'
    })

    const dataChange = (e) => {
        const name = e.target.name; //form태그 내의 name
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const dataSubmit = (e) => {
        e.preventDefault();
        const {nai} = formData; //formData객체에서 nai 추출해 nai변수에 치환

        if(!Number(nai) || isNaN(Number(nai))){ //nai 입력자료검사
            alert('나이는 숫자로 입력하세요');
        }else{
            alert('처리 성공');
        }
    }
    return(
        <>
        <h4>
            결과: {formData.irum}, 넌 {formData.nai}세. 선택한 음식은 {formData.menu}.  
        </h4>
        <form onSubmit={dataSubmit}>
            이름 : <input type="text" name="irum" onChange={dataChange} /><br/>
            나이 : <input type="text" name="nai" onChange={dataChange} /><br/>
            메뉴 :
            <select name="menu" value={formData.menu} onChange={dataChange} >
                <option value="치킨">치킨</option>  
                <option value="파전">파전</option>    
                <option value="삼겹살">삽겹살</option>
            </select><br/><br/>
            <button type="submit">전송</button>

        </form>
        </>
    )
}

export default MyForm;