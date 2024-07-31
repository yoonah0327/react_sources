import React, {useState} from "react";

const Counter = () => {
    const [member, setMember] = useState(0);

    const increase = () => {
        setMember(member +1); //member +=1
    }

    const decrease = () => {
        setMember(member -1); //member -=1
    }

    return(
        <div>
            <br/><br/>
            <button onClick={increase}>친구추가</button>&nbsp;&nbsp;
            <button onClick={decrease}>친구삭제</button>
            <p>친구수는 {member}</p>
        </div>
    );

}
export default Counter;