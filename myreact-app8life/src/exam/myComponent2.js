import React, { Component } from 'react';

class MyComponent2 extends Component{
    state = {
       number : ""
    }

    constructor(props) {
        super(props);
        console.log("Constructor Method 호출");
    }

    static getDerivedStateFromProps(nexProps, prevState) {
        console.log("getDerivedStateFromProps 호출");
    }

    shouldComponentUpdate(nextprops, nextState) {
        console.log("sholudComponetUpdate 호출")
        return true;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate 호출");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate 호출")
        return null;
    }

    handleOnChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    render(){
        console.log("render 호출")
        return(
            <div>
                <input onChange = {this.handleOnChange}></input>
                <h1>My Name is {this.state.name}</h1>
            </div>
        )
    }
}

export default MyComponent2;