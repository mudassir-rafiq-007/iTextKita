import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
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
  const [isTablet, setIsTablet] = useState(false);
  // const [landScape, setlandScape] = useState("");
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (deviceWidth >= 500) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <LinearGradient
        colors={["#FFFFFF", "#008080"]}
        locations={[0.5, 1]}
        style={styles.container}
      >
        <ITextKita
          height={isTablet ? deviceHeight * 0.15 : deviceHeight * 0.18}
          width={isTablet ? deviceWidth * 0.5 : deviceWidth * 0.6}
          style={styles.iTextKita}
        />
        <View style={[styles.form, { width: isTablet ? "50%" : "80%" }]}>
          <View
            style={[
              styles.inputField,
              { height: isTablet ? deviceHeight * 0.05 : deviceHeight * 0.06 },
            ]}
          >
            <User
              height={isTablet ? deviceHeight * 0.03 : deviceHeight * 0.05}
              width={isTablet ? deviceWidth * 0.03 : deviceWidth * 0.05}
              style={{
                marginHorizontal: isTablet
                  ? deviceWidth * 0.03
                  : deviceWidth * 0.05,
              }}
            />
            <TextInput
              style={[
                styles.textInput,
                {
                  fontSize: isTablet
                    ? deviceHeight * 0.02
                    : deviceHeight * 0.025,
                  marginTop: isTablet ? null : deviceHeight * 0.01,
                },
              ]}
              placeholder="User Name"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
            />
          </View>
          <View
            style={[
              styles.inputField,
              { height: isTablet ? deviceHeight * 0.05 : deviceHeight * 0.06 },
            ]}
          >
            <Key
              height={isTablet ? deviceHeight * 0.03 : deviceHeight * 0.05}
              width={isTablet ? deviceWidth * 0.03 : deviceWidth * 0.05}
              style={{
                marginHorizontal: isTablet
                  ? deviceWidth * 0.03
                  : deviceWidth * 0.05,
              }}
            />
            <TextInput
              style={[
                styles.textInput,
                {
                  fontSize: isTablet
                    ? deviceHeight * 0.02
                    : deviceHeight * 0.025,
                  marginTop: isTablet ? null : deviceHeight * 0.01,
                  width: isTablet ? "80%" : "70%",
                },
              ]}
              placeholder="Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              secureTextEntry={secureTextEntry}
            />
            <Hide
              height={isTablet ? deviceHeight * 0.03 : deviceHeight * 0.05}
              width={isTablet ? deviceWidth * 0.03 : deviceWidth * 0.05}
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
            fontSize={isTablet ? deviceWidth * 0.03 : deviceWidth * 0.05}
            marginVertical={deviceHeight * 0.03}
          />
        </View>
        <FlatButton
          title="Login"
          onPressed={() => {}}
          titleFontSize={isTablet ? deviceHeight * 0.02 : deviceHeight * 0.028}
        />
        <View style={styles.registerView}>
          <Text
            style={[
              styles.noAcc,
              {
                fontSize: isTablet ? deviceWidth * 0.025 : deviceWidth * 0.035,
              },
            ]}
          >
            I Don't Have Account?
          </Text>
          <TextButton
            title="Register"
            onPressed={() => {}}
            color="#008080"
            fontWeight="bold"
            fontSize={isTablet ? deviceWidth * 0.025 : deviceWidth * 0.035}
          />
        </View>
        <TwoPersons
          height={isTablet ? deviceHeight * 0.3 : deviceHeight * 0.22}
          width={isTablet ? deviceWidth * 0.95 : deviceWidth * 0.9}
        />
        <Text
          style={[
            styles.nTech,
            { fontSize: isTablet ? deviceWidth * 0.025 : deviceWidth * 0.04 },
          ]}
        >
          ⓒ & 2023 NTech Crop.
        </Text>
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
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "#c7c6c5",
    justifyContent: "center",
    textAlignVertical: "center",
    fontFamily: "Poppins-Regular",
    marginHorizontal: deviceWidth * 0.01,
  },
  registerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noAcc: {
    color: "#696969",
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
