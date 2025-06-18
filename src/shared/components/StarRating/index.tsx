import './StarRating.scss';

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  const totalStars = 5;

  const rounded = Math.round(rating * 10) / 10;

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, i) => {
        const starValue = i + 1;

        let className = 'star';
        if (rounded >= starValue) {
          className += ' filled';
        } else if (rounded >= starValue - 0.5) {
          className += ' half';
        }

        return (
          <span key={i} className={className}>
            ★
          </span>
        );
      })}
    </div>
  );
};

export { StarRating };
