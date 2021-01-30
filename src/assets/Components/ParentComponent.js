import React from 'react';
import '../CSS/Parent.css';
import ChildComponent1 from '../Components/ChildCompo1';
import ChildComponent2 from '../Components/ChildCompo2';

class ParentComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            num1 : '',
            num2 : '',
            operator : '',
            textContent : "0"
        };
    }

    handleClick = (e) =>{
        if(e.target.textContent==='+' || e.target.textContent==='-' || e.target.textContent==='*' || e.target.textContent==='/'){
            this.setState({
                operator : e.target.textContent,
                textContent : "0",
            });
            // console.log("Run1");
        }
        else if(this.state.operator===''){
            this.setState({
                num1 : this.state.num1 + e.target.textContent,
                textContent : this.state.num1 + e.target.textContent
            });
            // console.log("Run2");
        }
        else if(e.target.textContent==='='){
            this.setState({
                num1 : '',
                num2 : '',
                textContent : parseInt(this.state.num1) + parseInt(this.state.num2)
            });
            // console.log("Run3");
        }
        else if(e.target.textContent==='Clear'){
            this.setState({
                num1 : '',
                num2 : '',
                textContent : "0",
                operator : ''
            });
            // console.log("Run4");
        }
        else{
            this.setState({
                textContent : this.state.num2 + e.target.textContent,
                num2 : this.state.num2 + e.target.textContent
            });
            // console.log("Run5");
        }
    }

    render(){
        return(
            <div className="Container">
                <div className="Container_child">
                    <ChildComponent1 textContent={this.state.textContent}/>
                </div>
                <ChildComponent2 handleClick={this.handleClick}/>
            </div>
        );
    }
}

export default ParentComponent;