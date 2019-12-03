import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AuthorCard from './Author-Card/index';
import './style.css';
import authorsdb from '../authorsdb';

const renderAuthors = (authors) => {
    return authors.map(author => {
        return (<AuthorCard key={author.id} {...author} />);
    });
};

const AuthorList = ({ author }) => {
    return (
        <Fragment>
            <h2 className="author-page-title">Автори</h2>
            <p className="author-page-description">По-долу може да се запознаете с родните и преводните автори на интерактивния жанр в България, както от старата вълна (в периода 1990-2000 г.), така и от новата вълна (след 2011 г.).</p>
            <div className="author-list">
                {renderAuthors(authorsdb)}
            </div>
        </Fragment>
    )
};

AuthorList.defaultProps = {
    authors: []
}

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
}

export default AuthorList;