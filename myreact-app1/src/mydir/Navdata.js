import { Component } from "react";

class Navdata extends Component{
    render(){
        return(
            <ul>
            <b>{this.props.msg}</b>
            <li><a href="https://www.naver.com">Naver</a></li>
            <li><a href="https://www.daum.net">Daum</a></li>
            <li><a href="../abc.html">abc 파일</a></li>
            </ul>
        );
    }
}
export default Navdata;