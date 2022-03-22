import React from "react";
import { Button } from "@chakra-ui/react";

export const FeedbackButton = (props) => {
  const { text, handleButton } = props;
  return <Button onClick={() => handleButton()}>{text}</Button>;
};
