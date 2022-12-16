import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.statistics}>Statistics:</p>
      <ul className={css.statistics__list}>
        <li className={css.good}>Good: {good}</li>
        <li className={css.neutral}>Neutral: {neutral}</li>
        <li className={css.bad}>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li className={positivePercentage > 50 ? css.good : css.neutral}>
          Positive feedback:{' '}
          {positivePercentage ? positivePercentage.toFixed(0) : 0}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};

export default Statistics;
