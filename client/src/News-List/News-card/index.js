import React, { Component } from 'react';
import './style.css';

class NewsCard extends Component {

    render() {
        const { image, title, description } = this.props;

        return (
            <div className="news">
                <p className="news-title">{title}</p>
                <p className="news-description">{description}</p>
                <img className="news-image" src={image} alt={title} />
            </div>
        )
    }
}

export default NewsCard;