import React from 'react';
import './Button.css';

export default class NumberButton extends React.Component {
	render() {
		let classes = undefined;
		if (this.props.className !== undefined) {
			classes = `number-button ${this.props.className}`;
		} else {
			classes = 'number-button';
		}

		return <div className={classes}>{this.props.value}</div>;
	}
}
