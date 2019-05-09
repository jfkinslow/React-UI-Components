import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

export default class ButtonContainer extends React.Component {
	render() {
		return (
			<div id="button-container">
				<div className="button-row">
					<ActionButton className="unbold" value="clear" />
					<NumberButton className="red" value="&divide;" />
				</div>
				<div className="button-row">
					<NumberButton className="bold" value="7" />
					<NumberButton className="bold" value="8" />
					<NumberButton className="bold" value="9" />
					<NumberButton className="red" value="&times;" />
				</div>
				<div className="button-row">
					<NumberButton className="bold" value="4" />
					<NumberButton className="bold" value="5" />
					<NumberButton className="bold" value="6" />
					<NumberButton className="red" value="-" />
				</div>
				<div className="button-row">
					<NumberButton className="bold" value="1" />
					<NumberButton className="bold" value="2" />
					<NumberButton className="bold" value="3" />
					<NumberButton className="red" value="+" />
				</div>
				<div className="button-row">
					<ActionButton className="bold" value="0" />
					<NumberButton className="red" value="=" />
				</div>
			</div>
		);
	}
}
