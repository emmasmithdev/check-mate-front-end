import React, {Fragment} from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {

  const news = props.news.map((newsItem, index) => {
    return(
      <div>
      <li key={index} className="news-item">
          <NewsItem newsItem={newsItem}/>
      </li>
      </div>
    )
  });

  return(
    <Fragment>
      <ul className="news-list">
        {news}
      </ul>
    </Fragment>
  )
}

export default NewsList;
