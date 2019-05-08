import React from "react";
import "./Card.css";

export default class CardBody extends React.Component {
    render() {
        return <div className="card-body">{this.props.children}</div>;
    }
}