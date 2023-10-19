import PropTypes from 'prop-types';

export function FeedbackOptions({ name, onLeaveFeedback }) {
  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback(name.toLowerCase())}>
        {name}
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
