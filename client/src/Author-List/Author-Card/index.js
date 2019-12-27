import React, { Component } from 'react';
import './style.css';

class AuthorCard extends Component {
    
    render() {
        const { nickname, name, born, books, image } = this.props;

        return (
            <div className="author">
                <img className="author-image" src={image} alt={name} />
                <div className="description">
                    <span className="author-nickname">{nickname}</span>
                    <span className="author-name">Истинско име: {name}</span>
                    <span className="born">Роден: {born}</span>
                    <span className="author-books">Библиография: {books}</span>
                </div>
            </div>
        )
    }
}

export default AuthorCard;