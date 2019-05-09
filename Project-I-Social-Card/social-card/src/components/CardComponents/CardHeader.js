import React from 'react';
import "./Card.css";

export default class CardHeader extends React.Component {
    render(){
        return <h4 className={this.props.className}>{this.props.children}</h4>;
    }
}