import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {Object.keys(options).map(item => {
        return (
          <button
            name={item}
            onClick={onLeaveFeedback}
            className={css.feedback__button}
            key={nanoid()}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default FeedbackOptions;
