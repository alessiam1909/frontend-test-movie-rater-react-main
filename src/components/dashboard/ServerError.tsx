import { WarningIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

export const ServerError: React.FC = () => {
  return (
    <Box>
      <div style={{ textAlign: "center", width: "100%" }}>
        <WarningIcon w={5} h={5} />
      </div>
      <Box style={{ textAlign: "center" }}>Ops, si è verificato un errore</Box>
    </Box>
  );
};
