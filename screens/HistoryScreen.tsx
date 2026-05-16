import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  setScreen: any;
};

export default function HistoryScreen({
  setScreen,
}: Props) {
  const [games, setGames] = useState<any[]>(
    []
  );

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const data =
      await AsyncStorage.getItem("games");

    if (data) {
      setGames(JSON.parse(data));
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          marginBottom: 20,
        }}
      >
        Match History
      </Text>

      {games.map((game, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#222",
            padding: 15,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "orange",
              fontSize: 20,
            }}
          >
            {game.score}
          </Text>

          <Text style={{ color: "white" }}>
            {game.date}
          </Text>
        </View>
      ))}

      <TouchableOpacity
        onPress={() => setScreen("game")}
        style={{
          backgroundColor: "blue",
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}