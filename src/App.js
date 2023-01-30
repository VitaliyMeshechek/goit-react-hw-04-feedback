import React, { Component } from "react";
import {Section } from "components/Section/Section";
import {Statistics} from "components/Statistics/Statistics";
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";


// import ReactDOM from "react-dom";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
		const { good } = this.state;
    const ratio = (good / total) * 100;
    return Math.round(ratio);
  }

  onLeaveFeedback = (event) => {
    const {name} = event.target
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }))
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

      return (
        <>
         <Section title="Please leave feedback">
          </Section>
          <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
          />

        {total === 0 ? (<Notification message="No feedback given" />) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positiveFidback={this.countPositiveFeedbackPercentage()}
            />
            </Section>
        )}
        </>
      );
  }
}
