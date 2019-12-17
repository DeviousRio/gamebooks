import React, { Fragment } from 'react';
import AuthorCard from './Author-Card/index';
import './style.css';
import authorService from '../services/author-service';

const Authors = () => {
    const [authors, setAuthors] = React.useState('');

    React.useEffect(() => {
        authorService.load().then((res) => {
            setAuthors(res);
        });
    }, []);

    return <Fragment>
                <h2 className="author-page-title">Автори</h2>
                <p className="author-page-description">По-долу може да се запознаете с родните и преводните автори на интерактивния жанр в България, както от старата вълна (в периода 1990-2000 г.), така и от новата вълна (след 2011 г.).</p>
                <div>
                    {authors ?
                        <div className="author-list">
                            {authors.map((author) =>
                                <AuthorCard key={author._id} {...author} />)}
                        </div> : <div>Loading...</div>
                    }
                </div>
            </Fragment>
};

export default Authors;