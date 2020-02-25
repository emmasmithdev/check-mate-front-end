import React, {Fragment} from 'react';

const NewsItem = (props) => {
  if (!props.newsItem) {
    return "Loading News..."
  }

  const newsTitle = props.newsItem.value[0];

  return(
    <Fragment>
    <p>{newsTitle.title}</p>
    </Fragment>
  )
}

export default NewsItem;
