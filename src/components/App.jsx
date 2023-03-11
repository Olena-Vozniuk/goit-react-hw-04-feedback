import { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Layout from "./Layout/Layout";
import Section from './Section/Section';
import Statistics from "./Statistics/Statistics";
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  // const options = ['good', 'neutral', 'bad'];

  const addFeedback = (option) => {
    switch (option) {
      case 'good': {
        setGood(prevState => prevState + 1);
        break;
      }
        case 'neutral':{
        setNeutral(prevState => prevState + 1);
        break;
      }
        case 'bad':{
        setBad(prevState => prevState + 1);
        break;
      }
      default:
        console.log('Somthing is wrong...');
    }
    return;
  }
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => {
// const total = countTotalFeedback();
return Math.round((good / countTotalFeedback()) * 100);
};

  return (
      <Layout>
    <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={addFeedback} />
        </Section>

        <Section title='Statistics'> 
        {countTotalFeedback() ?   
          <Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
        />: (<Notification message="There is no feedback"></Notification>)
          } 
        </Section>
        <GlobalStyle />
      </Layout>
    )
};
