import React from "react";
import { Text } from "react-native";

import styles from "../styles/styles";

type Props = {
  seconds: number;
};

export default function Timer({
  seconds,
}: Props) {
  const mins = Math.floor(seconds / 60);

  const secs = seconds % 60;

  return (
    <Text style={styles.timer}>
      {mins}:{secs < 10 ? "0" : ""}
      {secs}
    </Text>
  );
}