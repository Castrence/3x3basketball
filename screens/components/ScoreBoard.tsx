import React from "react";

import {
  View,
  Text,
} from "react-native";

import styles from "../styles/styles";

type Props = {
  teamA: number;
  teamB: number;
};

export default function ScoreBoard({
  teamA,
  teamB,
}: Props) {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {teamA} - {teamB}
      </Text>
    </View>
  );
}