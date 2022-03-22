import { Flex, Container, Heading, Box } from "@chakra-ui/react";
import { useState } from "react";
import { FeedbackButton } from "./components/Button";
import { Statistics } from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const average = (good + bad + neutral) / 3;
  const total = good + bad + neutral;
  const percentageOfPositive = () => {
    if (isNaN(good / total)) return "0%";
    else return `${(good / total) * 100}%`;
  };

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <Container maxW="xl" my={30}>
      <Heading my={4}>Give Feedback</Heading>
      <Flex justify="space-between" my={8}>
        <FeedbackButton text="Good" handleButton={handleGood} />
        <FeedbackButton text="Neutral" handleButton={handleNeutral} />
        <FeedbackButton text="Bad" handleButton={handleBad} />
      </Flex>
      <Container>
        <Box>
          <Heading>Statistics</Heading>
        </Box>

        {good > 0 || bad > 0 || neutral > 0 ? (
          <>
            <Statistics text="Good" value={good} />
            <Statistics text="Neutral" value={neutral} />
            <Statistics text="Bad" value={bad} />
            <Statistics text="All" value={total} />
            <Statistics text="Average" value={average} />
            <Statistics
              text="Positive Feedback"
              value={percentageOfPositive()}
            />
          </>
        ) : (
          <Box>No feedback given</Box>
        )}
      </Container>
    </Container>
  );
};

export default App;
