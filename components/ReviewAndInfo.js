import React from 'react';
import StarRating from './StarRating';
import './Map.css';

function ReviewAndInfo({ title, address, num, info1, review, info3 }) {
  return (
    <div className='storeinfo'>
      <h2>가게 이름: {title}</h2>
      <div className='box'>
      <p>주소: {address}</p>
      <p>연락처: {num}</p>
      <p>메뉴정보: {info1}</p>
      <p>리뷰정보: {review}</p>
      <p>평점: <StarRating rating={info3} /></p>
      </div>
    </div>
  );
}

export default ReviewAndInfo;
