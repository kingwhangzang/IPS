import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
  const stars = Array(Math.floor(rating)).fill(null);

  return (
    <div>
      {stars.map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
    </div>
  );
}

export default StarRating;