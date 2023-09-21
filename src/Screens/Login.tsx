import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Key from "../../assets/key.svg";
import User from "../../assets/user.svg";
import Hide from "../../assets/hide.svg";
import ITextKita from "../../assets/iTextKita.svg";
import TwoPersons from "../../assets/two-persons.svg";
import TextButton from "../Components/Buttons/TextButton";
import FlatButton from "../Components/Buttons/FlatButton";
import { deviceHeight, deviceWidth } from "../Components/Constants";

export default function Login() {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <LinearGradient
        colors={["#FFFFFF", "#008080"]}
        locations={[0.5, 1]}
        style={styles.container}
      >
        <ITextKita
          height={deviceHeight * 0.18}
          width={deviceWidth * 0.6}
          style={styles.iTextKita}
        />
        <View style={styles.form}>
          <View style={styles.inputField}>
            <User
              height={deviceHeight * 0.05}
              width={deviceWidth * 0.05}
              style={{ marginHorizontal: deviceWidth * 0.05 }}
            />
            <TextInput
              style={[styles.textInput, { fontFamily: "Poppins-Regular" }]}
              placeholder="User Name"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
            />
          </View>
          <View style={styles.inputField}>
            <Key
              height={deviceHeight * 0.05}
              width={deviceWidth * 0.05}
              style={{ marginHorizontal: deviceWidth * 0.05 }}
            />
            <TextInput
              style={[
                styles.textInput,
                { fontFamily: "Poppins-Regular" },
                { width: "70%" },
              ]}
              placeholder="Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              secureTextEntry={secureTextEntry}
            />
            <Hide
              height={deviceHeight * 0.05}
              width={deviceWidth * 0.06}
              style={{ marginRight: deviceWidth * 0.04 }}
              onPress={() =>
                setSecureTextEntry((current) => (current ? false : true))
              }
            />
          </View>
        </View>
        <View>
          <TextButton
            color="#696969"
            title="Reset Password"
            onPressed={() => {}}
            fontSize={deviceWidth * 0.05}
            marginVertical={deviceHeight * 0.03}
          />
        </View>
        <FlatButton title="Login" onPressed={() => {}} />
        <View style={styles.registerView}>
          <Text style={styles.noAcc}>I Don't Have Account?</Text>
          <TextButton
            title="Register"
            onPressed={() => {}}
            color="#008080"
            fontWeight="bold"
          />
        </View>
        <TwoPersons height={deviceHeight * 0.22} width={deviceWidth * 0.9} />
        <Text style={styles.nTech}>ⓒ & 2023 NTech Crop.</Text>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  iTextKita: {
    marginTop: deviceHeight * 0.1,
    marginBottom: deviceHeight * 0.01,
  },
  form: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: deviceHeight * 0.03,
  },
  inputField: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#084A5B",
    textAlignVertical: "center",
    height: deviceHeight * 0.06,
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "#c7c6c5",
    justifyContent: "center",
    textAlignVertical: "center",
    fontSize: deviceHeight * 0.025,
    marginTop: deviceHeight * 0.008,
    marginHorizontal: deviceWidth * 0.01,
  },
  registerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noAcc: {
    color: "#696969",
    fontSize: deviceWidth * 0.035,
    fontFamily: "Poppins-Regular",
    marginTop: deviceHeight * 0.005,
  },
  nTech: {
    color: "white",
    fontSize: deviceWidth * 0.04,
    fontFamily: "Poppins-Regular",
    marginVertical: deviceHeight * 0.05,
  },
});
