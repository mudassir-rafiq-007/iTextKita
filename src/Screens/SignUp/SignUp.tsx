import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import HideIcon from "../../../assets/images/hide.svg";
import Folder from "../../../assets/images/folder.svg";
import ITextKita from "../../../assets/images/iTextKita.svg";
import TwoPersons from "../../../assets/images/two-persons.svg";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type loginProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

export default function SignUp(props: loginProps) {
  const { screenWidth, screenHeight, dimensionSetter } = useContext(DimensionsContext);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  function inputFieldStyle() {
    return [
      styles.inputField,
      {
        height: dimensionSetter({
          mobile: screenHeight * 0.05,
          tabPort: screenHeight * 0.05,
          tabLand: screenHeight * 0.06,
        }),
        paddingHorizontal: dimensionSetter({
          mobile: screenWidth * 0.03,
          tabPort: screenWidth * 0.03,
          tabLand: screenWidth * 0.01,
        }),
      },
    ];
  }

  function inputTextStyle() {
    return [
      styles.textInput,
      {
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.022,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
        marginTop: dimensionSetter({
          mobile: screenHeight * 0.005,
          tabPort: screenHeight * 0.01,
          tabLand: screenHeight * 0.005,
        }),
      },
    ];
  }

  function inputPasswordStyle() {
    return [
      styles.textInput,
      {
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.023,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
        marginTop: dimensionSetter({
          mobile: screenHeight * 0.01,
          tabPort: screenHeight * 0.01,
          tabLand: screenHeight * 0.005,
        }),
        width: dimensionSetter({
          mobile: "70%",
          tabPort: "80%",
          tabLand: "80%",
        }),
      },
    ];
  }

  function FolderIcon() {
    return (
      <Folder
        height={dimensionSetter({
          mobile: screenHeight * 0.05,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.03,
        })}
        width={dimensionSetter({
          mobile: screenWidth * 0.05,
          tabPort: screenWidth * 0.03,
          tabLand: screenWidth * 0.03,
        })}
      />
    );
  }

  function EyeIcon() {
    return (
      <HideIcon
        height={dimensionSetter({
          mobile: screenHeight * 0.05,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.03,
        })}
        width={dimensionSetter({
          mobile: screenWidth * 0.05,
          tabPort: screenWidth * 0.03,
          tabLand: screenWidth * 0.03,
        })}
        onPress={() =>
          setSecureTextEntry((current) => (current ? false : true))
        }
      />
    );
  }

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      style={{ height: "100%" }}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LinearGradient
        locations={[0.5, 1]}
        style={styles.container}
        colors={["#FFFFFF", "#008080"]}
      >
        <ITextKita
          height={dimensionSetter({
            mobile: screenHeight * 0.15,
            tabPort: screenHeight * 0.1,
            tabLand: screenHeight * 0.15,
          })}
          width={dimensionSetter({
            mobile: screenWidth * 0.4,
            tabPort: screenWidth * 0.5,
            tabLand: screenWidth * 0.3,
          })}
          style={{
            marginTop: dimensionSetter({
              mobile: screenHeight * 0.08,
              tabPort: screenHeight * 0.1,
              tabLand: screenHeight * 0.07,
            }),
            marginBottom: dimensionSetter({
              mobile: screenHeight * 0.01,
              tabPort: screenHeight * 0.01,
              tabLand: null,
            }),
          }}
        />
        <View
          style={[
            styles.form,
            {
              gap: screenHeight * 0.01,
              width: dimensionSetter({
                mobile: "80%",
                tabPort: "50%",
                tabLand: "30%",
              }),
            },
          ]}
        >
          <View style={inputFieldStyle()}>
            <TextInput
              style={inputTextStyle()}
              placeholder="First Name"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              onChangeText={(text) => {}}
            />
          </View>
          <View style={inputFieldStyle()}>
            <TextInput
              style={inputTextStyle()}
              placeholder="Last Name"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              onChangeText={(text) => {}}
            />
          </View>
          <View style={inputFieldStyle()}>
            <TextInput
              style={inputTextStyle()}
              placeholder="Business Name"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              onChangeText={(text) => {}}
            />
          </View>
          <View style={inputFieldStyle()}>
            <TextInput
              style={inputTextStyle()}
              placeholder="DTI Document"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              onChangeText={(text) => {}}
            />
            <FolderIcon />
          </View>
          <View style={inputFieldStyle()}>
            <TextInput
              style={inputPasswordStyle()}
              placeholder="Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              secureTextEntry={secureTextEntry}
              onChangeText={(text) => {}}
            />
            <EyeIcon />
          </View>
          <View style={inputFieldStyle()}>
            <TextInput
              style={inputPasswordStyle()}
              placeholder="Confirm Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              secureTextEntry={secureTextEntry}
              onChangeText={(text) => {}}
            />
            <EyeIcon />
          </View>
        </View>
        <FlatButton
          title="Sign Up"
          zIndex={2}
          onPressed={() => {}}
          titleFontSize={dimensionSetter({
            mobile: screenWidth * 0.05,
            tabPort: screenWidth * 0.035,
            tabLand: screenWidth * 0.015,
          })}
          paddingHorizontal={dimensionSetter({
            mobile: screenWidth * 0.08,
            tabPort: screenWidth * 0.035,
            tabLand: screenWidth * 0.03,
          })}
          marginVertical={dimensionSetter({
            mobile: screenHeight * 0.015,
            tabPort: screenHeight * 0.03,
            tabLand: screenHeight * 0.03,
          })}
        />
        <View style={styles.registerView}>
          <Text
            style={[
              styles.noAcc,
              {
                zIndex: 2,
                fontSize: dimensionSetter({
                  mobile: screenWidth * 0.035,
                  tabPort: screenWidth * 0.025,
                  tabLand: screenWidth * 0.015,
                }),
              },
            ]}
          >
            Already Have Account?
          </Text>
          <TextButton
            title="Login"
            onPressed={() => props.navigation.navigate("Login")}
            color="#008080"
            zIndex={2}
            fontWeight="bold"
            fontSize={dimensionSetter({
              mobile: screenWidth * 0.035,
              tabPort: screenWidth * 0.025,
              tabLand: screenWidth * 0.015,
            })}
          />
        </View>
        <TwoPersons
          height={dimensionSetter({
            mobile: screenHeight * 0.22,
            tabPort: screenHeight * 0.3,
            tabLand: screenHeight * 0.55,
          })}
          width={dimensionSetter({
            mobile: screenWidth * 0.9,
            tabPort: screenWidth * 0.95,
            tabLand: screenWidth * 0.95,
          })}
          style={dimensionSetter({
            mobile: null,
            tabPort: null,
            tabLand: {
              zIndex: 1,
              opacity: 0.7,
              position: "absolute",
              alignItems: "center",
              bottom: screenHeight * 0.01,
            },
          })}
        />
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#084A5B",
  },
  textInput: {
    flex: 1,
    opacity: 0.5,
    width: "100%",
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  registerView: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noAcc: {
    color: "#696969",
    fontFamily: "Poppins-Regular",
  }
});
