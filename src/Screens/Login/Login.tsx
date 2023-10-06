import {
  Text,
  View,
  Platform,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Key from "../../../assets/images/key.svg";
import User from "../../../assets/images/user.svg";
import Hide from "../../../assets/images/hide.svg";
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

export default function Login(props: loginProps) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  function inputFieldStyle() {
    return [
      styles.inputField,
      {
        height: screenHeight * 0.06,
      },
    ];
  }

  function textInputStyle() {
    return [
      styles.textInput,
      {
        fontSize: screenHeight * 0.02,
        marginTop:
          Platform.OS == "android"
            ? dimensionSetter({
                mobile: screenHeight * 0.005,
                tabPort: screenHeight * 0.01,
                tabLand: screenHeight * 0.005,
              })
            : null,
        marginHorizontal: dimensionSetter({
          mobile: screenWidth * 0.01,
          tabPort: screenWidth * 0.01,
          tabLand: screenWidth * 0.005,
        }),
      },
    ];
  }

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, height: screenHeight }}
      keyboardShouldPersistTaps="handled"
    >
      <LinearGradient
        colors={["#FFFFFF", "#008080"]}
        locations={[0.5, 1]}
        style={dimensionSetter({
          mobile: styles.container,
          tabPort: styles.container,
          tabLand: [styles.container, { justifyContent: "flex-start" }],
        })}
      >
        <ITextKita
          height={dimensionSetter({
            mobile: screenHeight * 0.18,
            tabPort: screenHeight * 0.15,
            tabLand: screenHeight * 0.2,
          })}
          width={dimensionSetter({
            mobile: screenWidth * 0.6,
            tabPort: screenWidth * 0.5,
            tabLand: screenWidth * 0.3,
          })}
          style={{
            marginTop: dimensionSetter({
              mobile: screenHeight * 0.1,
              tabPort: screenHeight * 0.1,
              tabLand: screenHeight * 0.07,
            }),
          }}
        />
        <View
          style={[
            styles.form,
            {
              gap: screenHeight * 0.03,
              width: dimensionSetter({
                mobile: "80%",
                tabPort: "60%",
                tabLand: "30%",
              }),
            },
          ]}
        >
          <View style={inputFieldStyle()}>
            <User
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
              style={{
                marginHorizontal: dimensionSetter({
                  mobile: screenWidth * 0.05,
                  tabPort: screenWidth * 0.03,
                  tabLand: screenWidth * 0.01,
                }),
              }}
            />
            <TextInput
              style={textInputStyle()}
              placeholder="User Name"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
            />
          </View>
          <View style={inputFieldStyle()}>
            <Key
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
              style={{
                marginHorizontal: dimensionSetter({
                  mobile: screenWidth * 0.05,
                  tabPort: screenWidth * 0.03,
                  tabLand: screenWidth * 0.01,
                }),
              }}
            />
            <TextInput
              style={[
                ...textInputStyle(),
                {
                  width: dimensionSetter({
                    mobile: "70%",
                    tabPort: "80%",
                    tabLand: "80%",
                  }),
                },
              ]}
              placeholder="Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              secureTextEntry={secureTextEntry}
            />
            <Hide
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
              style={{
                marginRight: dimensionSetter({
                  mobile: screenWidth * 0.04,
                  tabPort: screenWidth * 0.04,
                  tabLand: screenWidth * 0.01,
                }),
              }}
              onPress={() =>
                setSecureTextEntry((current) => (current ? false : true))
              }
            />
          </View>
        </View>
        <View style={{ zIndex: 2 }}>
          <TextButton
            color="#696969"
            title="Reset Password"
            zIndex={2}
            onPressed={() => props.navigation.navigate("Reset Password")}
            fontSize={dimensionSetter({
              mobile: screenWidth * 0.05,
              tabPort: screenWidth * 0.03,
              tabLand: screenWidth * 0.02,
            })}
            marginVertical={dimensionSetter({
              mobile: screenHeight * 0.03,
              tabPort: screenHeight * 0.03,
              tabLand: screenHeight * 0.02,
            })}
          />
        </View>
        <FlatButton
          title="Login"
          zIndex={2}
          onPressed={() => props.navigation.navigate("Campaign")}
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
            I Don't Have Account?
          </Text>
          <TextButton
            title="Register"
            onPressed={() => props.navigation.navigate("SignUp")}
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
        <View style={{ zIndex: 2 }}>
          <TextButton
            color="#696969"
            title="Terms & Conditions"
            zIndex={2}
            onPressed={() => props.navigation.navigate("Terms")}
            marginVertical={screenHeight * 0.01}
            fontSize={dimensionSetter({
              mobile: screenHeight * 0.015,
              tabPort: screenWidth * 0.02,
              tabLand: screenWidth * 0.012,
            })}
          />
        </View>
        <View
          style={dimensionSetter({
            mobile: { alignItems: "center" },
            tabPort: { alignItems: "center" },
            tabLand: {
              zIndex: 1,
              position: "absolute",
              alignItems: "center",
              bottom: screenHeight * 0.01,
            },
          })}
        >
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
          />
          <Text
            style={[
              styles.nTech,
              {
                zIndex: 1,
                marginVertical: dimensionSetter({
                  mobile: screenHeight * 0.05,
                  tabPort: screenHeight * 0.05,
                  tabLand: screenHeight * 0.02,
                }),
                fontSize: dimensionSetter({
                  mobile: screenWidth * 0.04,
                  tabPort: screenWidth * 0.025,
                  tabLand: screenWidth * 0.015,
                }),
              },
            ]}
          >
            ⓒ & 2023 NTech Crop.
          </Text>
        </View>
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
  form: {
    alignItems: "center",
    justifyContent: "center",
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
  },
  nTech: {
    color: "white",
    fontFamily: "Poppins-Regular",
  },
});
