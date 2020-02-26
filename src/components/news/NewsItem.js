import React, {Fragment} from 'react';

const NewsItem = (props) => {
  if (!props.newsItem) {
    return "Loading News..."
  }


  return(
    <Fragment>
    <img className="news-img" src={props.newsItem.image.url} alt="news item pic"/>
    <p className="newsTitle">{props.newsItem.title}</p>
    <p className="newsBody">{props.newsItem.body}</p>
    </Fragment>
  )
}

export default NewsItem;
