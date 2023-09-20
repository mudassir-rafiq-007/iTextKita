import React from "react"
import { StyleSheet, Text, View } from "react-native";
import ITextKita from "../../assets/iTextKita.svg"
import {LinearGradient} from "expo-linear-gradient"

export default function Login() {
    return (
      <LinearGradient colors={["#FFFFFF", "#008080"]} locations={[0.5,1]} style={styles.container}>
        <ITextKita height={100} width={100}/>
        <Text>Open up App.js to start working on your app!</Text>
      </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });