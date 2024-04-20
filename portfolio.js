import * as React from "react";
import { Frame, Text } from "framer";

export function BioSection() {
  return (
    <Frame
      width="100%"
      height={200}
      background="#f0f0f0"
      padding={20}
      borderRadius={8}
    >
      <Text
        width="100%"
        height="auto"
        fontSize={18}
        color="#333"
        lineHeight={1.4}
      >
        Hello, I'm Joy Adevu, a passionate technology consultant and content creator.
      </Text>
      <Text
        width="100%"
        height="auto"
        fontSize={16}
        color="#007bff"
        style={{ cursor: "pointer" }}
        onClick={() => window.open("mailto:joyadevu1@gmail.com")}
      >
        Email: joyadevu1@gmail.com
      </Text>
    </Frame>
  );
}