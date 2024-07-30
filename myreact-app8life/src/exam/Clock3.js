import { useState, useEffect } from "react";

const Clock3 = () => {
    //useState로 state를 초기화
    const [date, setDate] = useState(new Date());

    //useEffect를 사용하면 내부적으로 생명주기메소드가 수행된다
    useEffect(() => {
        //클래스의 componentDidMount()를 아래처럼 기술
        const timerID = setInterval(() => showSigan(), 1000);

        //클래스의 componentWillMount()를 아래처럼 기술
        return () => {
            clearInterval(timerID);
        }
    }, []);

    const showSigan = () => {
        setDate(new Date());
    }

    return(
        <div>
            <h1>🕰️틱톡(함수형)🕰️</h1>
            <h2>시각 : {new Date().toLocaleTimeString()}</h2>
            <h2>현 시간 : {date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock3;