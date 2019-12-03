import React, { Component } from 'react';
import './style.css';

class AuthorCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, name, description, image } = this.props;

        return (
            <div className="author">
                <img className="author-image" src={image} alt={name} />
                <div className="description">
                    <span className="author-name">{name}</span>
                    <span className="author-description">{description}</span>
                </div>
            </div>
        )
    }
}

export default AuthorCard;