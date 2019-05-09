import React from 'react';
import './Card.css';
import CardContent from "./CardContent";
import CardBanner from "./CardBanner"

export default class CardContainer extends React.Component {
    render() {
        return <div className="card-container">
            <CardBanner src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" className="card-banner" alt="React Background" />
            <CardContent />
        </div>
    }
}