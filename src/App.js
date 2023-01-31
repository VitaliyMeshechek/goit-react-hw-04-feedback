import { useState } from "react";
import {Section } from "components/Section/Section";
import {Statistics} from "components/Statistics/Statistics";
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";


export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = Object.keys({good, neutral, bad});

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);


  const onLeaveFeedback = (value) => {
    switch (value) {
      case 'bad':
        setBad(prevBad => prevBad + 1)
        break;
        case 'good':
          setGood(prevGood => prevGood + 1);
          break;
        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;
        default:
          return;
      }
    };

      return (
        <>
         <Section title="Please leave feedback">
          <FeedbackOptions
          options={feedback}
          onLeaveFeedback={onLeaveFeedback}
          />
          </Section>

        {total === 0 ? (<Notification message="No feedback given" />) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFidback={countPositiveFeedbackPercentage}
            />
            </Section>
        )}
        </>
      );
}

