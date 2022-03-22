import { Table, Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";

export const Statistics = (props) => {
  const { text, value } = props;

  return (
    <Table>
      <Tbody>
        <Tr>
          <Td fontSize="md">{text}</Td>
          <Td isNumeric>{value}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
