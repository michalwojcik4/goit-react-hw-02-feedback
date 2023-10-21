import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ name, onLeaveFeedback }) {
  return (
    <button className={css.button} type="button" onClick={() => onLeaveFeedback(name.toLowerCase())}>
      {name}
    </button>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
