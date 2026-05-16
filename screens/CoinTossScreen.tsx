import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

type Props = {
  setScreen: any;
  setCoinWinner: any;
};

export default function CoinTossScreen({
  setScreen,
  setCoinWinner,
}: Props) {
  const tossCoin = () => {
    const winner =
      Math.random() > 0.5
        ? "Team A"
        : "Team B";

    setCoinWinner(winner);
    setScreen("game");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          marginBottom: 30,
        }}
      >
        3x3 Basketball
      </Text>

      <TouchableOpacity
        onPress={tossCoin}
        style={{
          backgroundColor: "orange",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Toss Coin
        </Text>
      </TouchableOpacity>
    </View>
  );
}