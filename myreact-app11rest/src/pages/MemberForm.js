import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberForm(){
    const navigate = useNavigate();
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,//전개연산자에의해 풀림
            [e.target.name]:e.target.value
        })
    }
    //추가버튼 클릭에 의한 이벤트 핸들러
    const handleSave = () => {
        //ajax 요청 설정(POST방식)
        axios.post("/members", state)
        .then(res => {
            if(res.data.isSuccess){
                alert("추가성공");
                navigate("/members") //추가 후 목록보기
                //페이지이동방법2: link. navigate. 
                //navigate는 이벤트에 의해서 페이지이동할경우 사용.
            }
        })
        .catch(error =>{ //에러발생시 
            console.log(error); //콘솔에 출력되게 함
        })
    }

    return(
        <>
         <h2>❄️회원 입력❄️</h2>
         <input onChange={handleChange} type="text" name="name" placeholder="이름을 입력하시오"></input>
         <br/>
         <input onChange={handleChange} type="text" name="addr" placeholder="주소를 입력하시오"></input>
         <br/>
        <button onClick={handleSave}>추가</button>
        </>
    )
}