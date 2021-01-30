import React from 'react';
import '../CSS/Parent.css';

class ChildComponent1 extends React.Component {
    render() {
        return(
            <div className="content">
                {this.props.textContent}
            </div>
        )
    }
}

export default ChildComponent1;