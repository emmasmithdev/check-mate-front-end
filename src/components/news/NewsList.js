import React, {Fragment} from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {

  const news = props.news.map((newsItem, index) => {
    return(
      <li key={index} classname="component-item">
        <div className="component">
          <NewsItem newsItem={newsItem}/>
        </div>
      </li>
    )
  });

  return(
    <Fragment>
      <ul className="component-list">
        {news}
      </ul>
    </Fragment>
  )
}

export default NewsList;
