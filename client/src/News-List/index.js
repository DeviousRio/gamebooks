import React from 'react';
import './style.css';
import NewsCard from './News-card/index';
import newsService from '../services/news-service';

const News = () => {
    const [news, setNews] = React.useState('');

    React.useEffect(() => {
        newsService.load().then((res) => {
            setNews(res);
        });
    }, []);

    return <div className="news-container">
        <h2 className="news-page-title">Новини</h2>
        <div>
            {news ?
                <div className="news-list">
                    {news.map((res) =>
                        <NewsCard key={res._id} {...res} />)}
                </div> : <div>Loading...</div>
            }
        </div>
    </div>
}

export default News;