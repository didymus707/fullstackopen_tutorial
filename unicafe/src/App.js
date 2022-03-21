import { Flex, Button, Container, Heading, Box, Text } from "@chakra-ui/react";
import { useState } from "react";

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
      <Flex justify="space-between" my={4}>
        <Button onClick={handleGood}>Good</Button>
        <Button onClick={handleNeutral}>Neutral</Button>
        <Button onClick={handleBad}>Bad</Button>
      </Flex>
      <Container>
        <Box>
          <Heading as="h3" size="md">
            Statistics
          </Heading>
        </Box>

        <Container>
          <Box>
            <Flex>
              <Text fontSize="md">Good</Text>: {good}
            </Flex>
            <Flex>
              <Text fontSize="md">Neutral</Text>: {neutral}
            </Flex>
            <Flex>
              <Text fontSize="md">Bad</Text>: {bad}
            </Flex>
            <Flex>
              <Text fontSize="md">Average</Text>: {average}
            </Flex>
            <Flex>
              <Text fontSize="md">Total</Text>: {total}
            </Flex>
            <Flex>
              <Text fontSize="md">Positive Feedbacks</Text>:{" "}
              {percentageOfPositive()}
            </Flex>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default App;
