import React from 'react';
import './Button.css';

export default class ActionButton extends React.Component {
	render() {
		return <div className="action-button">{this.props.value}</div>;
	}
}
