import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm(){
    // /members/:num/edit num값 읽기
    const {num} = useParams();

    //수정할 정보 state로 관리
    const [state, setState] = useState({
        num:0,
        name:"",
        addr:""

    });

    useEffect(() => {
        //ajax 요청 설정(GET방식): 수정자료1개읽기
        axios.get("/members" + num)
        .then(res => {
            //서버로부터 응답된 데이터를 이용해 state수정.
            //res.data는 {num:1, name: 홍길동, addr: 강남구}의 형태
            setState(res.data)
        })
        .catch(error =>{ //에러발생시 
            console.log(error); //콘솔에 출력되게 함
        })
    }, [num])

    const handleChange = (e) => {
        setState({
            ...state,//전개연산자에의해 풀림
            [e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate();

    //수정버튼 클릭에 의한 이벤트 핸들러
    const handleSave = () => {
        //ajax 요청 설정(PUT방식)
        axios.put("/members/" + num, state)
        .then(res => {
                navigate("/members") //수정 후 목록보기
                //페이지이동방법2: link. navigate. 
                //navigate는 이벤트에 의해서 페이지이동할경우 사용.
        })
        .catch(error =>{ //에러발생시 
            console.log(error); //콘솔에 출력되게 함
        })
    }

    return(
        <>
        <h2>회원정보수정</h2>
        <div>
            <label>이름: </label>
            <input type="text" name="name" onChange={handleChange}></input>
        </div>
        <div>
            <label>주소: </label>
            <input type="text" name="addr" onChange={handleChange}></input>
        </div>
        <button onClick={handleSave}>수정확인</button>
        </>
    );
}

