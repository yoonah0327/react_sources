import React, {Component} from "react";
import store from "../store";

export default class ShowNumber extends Component{
    state= {number:store.getState().number}

    constructor(props){
        super(props);

        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this));
    }
    render(){
        return(
            <div>
                <h3>Show Number</h3>
                {/* 
                <input type="text" value={this.props.num} readOnly></input>
                */}
                {/* redux 사용*/}
                <input type="text" value={this.state.number} readOnly></input>

            </div>
        );
    }
}