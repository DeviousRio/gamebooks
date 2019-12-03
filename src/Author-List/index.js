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