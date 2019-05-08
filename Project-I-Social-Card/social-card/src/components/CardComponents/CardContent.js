import React from 'react';
import './Card.css';
import CardHeader from './CardHeader.js';
import CardBody from './CardBody.js';

export default class CardContent extends React.Component {
    render() {
        return (
            <div className="card-content">
                <CardHeader>Get started with React</CardHeader>
                <CardBody>React makes it painless to create interactive UIs. Design simple views for each state in your application.<div className="card-body-grey">reactjs.org</div></CardBody>
            </div>
        )
    }
}