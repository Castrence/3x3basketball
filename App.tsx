import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import CoinTossScreen from "./screens/CoinTossScreen";
import GameScreen from "./screens/GameScreen";
import HistoryScreen from "./screens/HistoryScreen";

export default function App() {
  const [screen, setScreen] = useState("coin");
  const [coinWinner, setCoinWinner] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen === "coin" && (
        <CoinTossScreen
          setScreen={setScreen}
          setCoinWinner={setCoinWinner}
        />
      )}

      {screen === "game" && (
        <GameScreen
          setScreen={setScreen}
          coinWinner={coinWinner}
        />
      )}

      {screen === "history" && (
        <HistoryScreen
          setScreen={setScreen}
        />
      )}
    </SafeAreaView>
  );
}