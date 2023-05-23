import React from 'react';
import StarRating from './StarRating';

function ReviewAndInfo({ title, review, info1, info2, info3 }) {
  return (
    <div>
      <h2>가게 이름: {title}</h2>
      <p>리뷰: {review}</p>
      <p>메뉴정보: {info1}</p>
      <p>연락처: {info2}</p>
      <p>평점: <StarRating rating={info3} /></p>
    </div>
  );
}

export default ReviewAndInfo;
