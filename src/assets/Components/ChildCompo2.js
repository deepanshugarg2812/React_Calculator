import React from 'react';
import '../CSS/Parent.css';

class ChildComponent2 extends React.Component {
    render() {
        return(
            <div className="Container_Child_two">
                    <div className="row">
                        <div className="row_element" onClick={this.props.handleClick}>1</div>
                        <div className="row_element" onClick={this.props.handleClick}>2</div>
                        <div className="row_element" onClick={this.props.handleClick}>3</div>
                        <div className="row_element row_element_op" onClick={this.props.handleClick}>+</div>
                    </div>
                    <div className="row">
                        <div className="row_element" onClick={this.props.handleClick}>4</div>
                        <div className="row_element" onClick={this.props.handleClick}>5</div>
                        <div className="row_element" onClick={this.props.handleClick}>6</div>
                        <div className="row_element row_element_op" onClick={this.props.handleClick}>*</div>
                    </div>
                    <div className="row">
                        <div className="row_element" onClick={this.props.handleClick}>7</div>
                        <div className="row_element" onClick={this.props.handleClick}>8</div>
                        <div className="row_element" onClick={this.props.handleClick}>9</div>
                        <div className="row_element row_element_op" onClick={this.props.handleClick}>/</div>
                    </div>
                    <div className="row">
                        <div className="row_element" onClick={this.props.handleClick}>.</div>
                        <div className="row_element" onClick={this.props.handleClick}>0</div>
                        <div className="row_element" onClick={this.props.handleClick}>=</div>
                        <div className="row_element row_element_op" onClick={this.props.handleClick}>-</div>
                    </div>
                    <div className="row">
                        <div className="row_element row_element_op" onClick={this.props.handleClick}>Clear</div>
                    </div>
                </div>
        )
    }
}

export default ChildComponent2;