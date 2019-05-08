import React from 'react';
import './Card.css';

export default class CardBanner extends React.Component {
    render() {
        return <img className={this.props.className} src={this.props.src} alt={this.props.alt} />;
    }
}