import React, {Component} from "react";

/*
class MyName extends Component{
    // static defaultProps = { //props에 기본값부여
    //     name:'기본이름'
    // }

    render(){
        return(
            <div>
                안녕~ 내 이름은 <b>{this.props.name}</b>

            </div>
        );
    }
}

MyName.defaultProps = { //props에 기본값부여
    name:'기본이름'
}
// static defaultProps 와 같은 표현. 
 

*/

//클래스를 함수로 소스코드 변환1
//클래스보다 함수가 속도가 더 빠르다
/*
function MyName(ppp){ 
    return(
        <div>
            반갑습니다. 제 이름은 <b>{ppp.name}</b>입니다.
        </div>
    )
}
 */
//클래스를 함수로 소스 코드변환2
const MyName = ({name}) => { 
    return(
        <div>
            하이! 난 <b>{name}</b>야!
        </div>
    )
}





export default MyName;