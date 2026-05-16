import React, {
  useEffect,
  useState,
} from "react";

import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/styles";

import Timer from "../components/Timer";
import TeamCard from "../components/TeamCard";
import ScoreBoard from "../components/ScoreBoard";

type Props = {
  setScreen: any;
  coinWinner: string;
};

export default function GameScreen({
  setScreen,
  coinWinner,
}: Props) {
  const [teamAScore, setTeamAScore] =
    useState(0);

  const [teamBScore, setTeamBScore] =
    useState(0);

  const [teamAFouls, setTeamAFouls] =
    useState(0);

  const [teamBFouls, setTeamBFouls] =
    useState(0);

  const [seconds, setSeconds] =
    useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) =>
        prev > 0 ? prev - 1 : 0
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const saveGame = async () => {
    const game = {
      date: new Date().toLocaleString(),
      score: `${teamAScore} - ${teamBScore}`,
    };

    const existing =
      await AsyncStorage.getItem("games");

    const games = existing
      ? JSON.parse(existing)
      : [];

    games.push(game);

    await AsyncStorage.setItem(
      "games",
      JSON.stringify(games)
    );

    alert("Game Saved!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        First Ball: {coinWinner}
      </Text>

      <Timer seconds={seconds} />

      <ScoreBoard
        teamA={teamAScore}
        teamB={teamBScore}
      />

      <View style={styles.teamsRow}>
        <TeamCard
          teamName="Team A"
          score={teamAScore}
          fouls={teamAFouls}
          onAdd={() =>
            setTeamAScore(teamAScore + 1)
          }
          onMinus={() =>
            setTeamAScore(
              Math.max(0, teamAScore - 1)
            )
          }
          onFoul={() =>
            setTeamAFouls(teamAFouls + 1)
          }
        />

        <TeamCard
          teamName="Team B"
          score={teamBScore}
          fouls={teamBFouls}
          onAdd={() =>
            setTeamBScore(teamBScore + 1)
          }
          onMinus={() =>
            setTeamBScore(
              Math.max(0, teamBScore - 1)
            )
          }
          onFoul={() =>
            setTeamBFouls(teamBFouls + 1)
          }
        />
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={saveGame}
      >
        <Text style={styles.bigButtonText}>
          Save Game
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.historyButton}
        onPress={() =>
          setScreen("history")
        }
      >
        <Text style={styles.bigButtonText}>
          View History
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}