import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/styles";

type Props = {
  teamName: string;
  score: number;
  fouls: number;

  onAdd: () => void;
  onMinus: () => void;
  onFoul: () => void;
};

export default function TeamCard({
  teamName,
  score,
  fouls,
  onAdd,
  onMinus,
  onFoul,
}: Props) {
  return (
    <View style={styles.teamCard}>
      <Text style={styles.teamName}>
        {teamName}
      </Text>

      <Text style={styles.score}>
        {score}
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          styles.plusButton,
        ]}
        onPress={onAdd}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.minusButton,
        ]}
        onPress={onMinus}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>

      <Text style={styles.foulText}>
        Fouls: {fouls}
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          styles.foulButton,
        ]}
        onPress={onFoul}
      >
        <Text style={styles.buttonText}>
          + Foul
        </Text>
      </TouchableOpacity>
    </View>
  );
}
