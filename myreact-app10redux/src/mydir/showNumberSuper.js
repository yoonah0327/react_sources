import React, {Component} from "react";
import ShowNumber from "./showNumber";

export default class ShowNumberSuper extends Component{
    render(){
        return(
            <div id="super">
                <h2>ShowNumber Super</h2>
                {/* 
                ShowNumber Super의 numb: {this.props.numb}
                <ShowNumber num={this.props.numb}></ShowNumber>
                */}
                <ShowNumber></ShowNumber>
            </div>
        );
    }
}
