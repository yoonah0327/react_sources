import React, {useState, useEffect} from "react";

const MyAjax = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    //fetch를 이용해 jsp 자료(Apache server) 읽기
    // Ajax 처리 성공하면 isLoaded, items갱신. 실패하면 error 갱신.
    useEffect(() => {
        fetch("/web_react/abc.jsp", {method:'GET'})
        .then(res => {
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.fruits); //fruits 받아오는자료값의 fruits. 상단useState와무관
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    //error가 나면 에러메시지를, isLoaded가 false이면 로딩메시지 보이기
    //그외의 경우 items를 출력(rendering)한다.
    if(error){
        return <div>에러: {error.message}</div>
    }else if(!isLoaded){
        return <div>자료 수신중</div>
    }else{
        return(
            <ul>
                {items.map(fitem => (
                    <li>
                        {fitem.code} {fitem.name} {fitem.price}
                    </li>
                ))}
            </ul>
        );
    }


}

export default MyAjax;