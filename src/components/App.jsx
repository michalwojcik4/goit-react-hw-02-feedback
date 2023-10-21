import { Component } from 'react';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = total ? Math.round((good / total) * 100) : 0;

    return (
      <div>
        <Section title="Please leave feedback">
          <div className={css.buttonList}>
            <FeedbackOptions name={'Good'} onLeaveFeedback={this.increment} />
            <FeedbackOptions
              name={'Neutral'}
              onLeaveFeedback={this.increment}
            />
            <FeedbackOptions name={'Bad'} onLeaveFeedback={this.increment} />
          </div>
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}
