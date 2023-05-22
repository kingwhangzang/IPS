// ReviewAndInfo.js
import React from 'react';

function ReviewAndInfo({ name, review, info }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{review}</p>
      <p>{info}</p>
    </div>
  );
}

export default ReviewAndInfo;
