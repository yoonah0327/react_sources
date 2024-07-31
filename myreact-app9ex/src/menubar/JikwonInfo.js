import React, {useState, useEffect} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 가져오기

const JikwonAjax = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch("/wpro2/JikwonInfo.jsp", {method:"GET"})
        .then(res => {
            if(!res.ok){
                throw new Error('network does not response');
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setInfo(result.jikwonInfo);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )


    }, []);

    if(error){
        return <div>에러발생: {error.message}</div>
    }else if(!isLoaded){
        return <div>자료 수신중</div>
    }else{
        return(
            <>
            <br/>
               <table class="table table-striped">
               <thead class="table-dark">
                <tr>
                    <th>사번</th><th>직원명</th><th>부서명</th><th>직급</th>
                </tr>
                </thead>
                <tbody>
                {info.map(jinfo => (
                <tr key={jinfo.jikwon_no}>
                    <td>{jinfo.jikwon_no}</td><td>{jinfo.jikwon_name}</td><td>{jinfo.buser_name}</td><td>{jinfo.jikwon_jik}</td>
                </tr> 
                 ))}
                </tbody>
               </table>
               <div>
                인원수 : {info.length}명
               </div>
            </>


        );
    }


}

export default JikwonAjax;
