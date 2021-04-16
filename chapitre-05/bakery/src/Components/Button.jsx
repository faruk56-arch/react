import React from 'react';


class Button extends React.Component {
    render(props) {
        return (

            <div className="p-4">
                <button  onClick={this.props.onClickFunction} className={this.props.isSelected}>
                    {this.props.children}
                </button>
                
                {/* {this.props.onClick} */}

            </div>
        )
    }
}
export default Button;