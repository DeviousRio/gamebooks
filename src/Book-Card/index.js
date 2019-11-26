import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class BookCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, title, price, author, image } = this.props;

        return (
            <div>
                <img className="book-image" src={image} alt={title} />
                <div>
                    <span className="book-title">{title}</span>
                    <span className="book-author">{author}</span>
                    <span className="book-price">{price}</span>
                </div>
            </div>
        )
    }
}

export default BookCard;