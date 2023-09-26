import {
  Text,
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as Device from "expo-device";
import * as Screen from "expo-screen-orientation";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import Key from "../../assets/key.svg";
import User from "../../assets/user.svg";
import Hide from "../../assets/hide.svg";
import ITextKita from "../../assets/iTextKita.svg";
import TwoPersons from "../../assets/two-persons.svg";
import TextButton from "../Components/Buttons/TextButton";
import FlatButton from "../Components/Buttons/FlatButton";
import { deviceHeight, deviceWidth } from "../Components/Constants/DeviceDimensions";

type dimensionSetterProp = {
  mobile: any;
  tabPort: any;
  tabLand: any;
};

type loginProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

export default function SignUp(props: loginProps) {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [tabPortrait, setTabPortrait] = useState<boolean>(false);
  const [tabLandscape, setTabLandscape] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(deviceWidth);
  const [screenHeight, setScreenHeight] = useState<number>(deviceHeight);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  // Selects value based on screen orientation
  function dimensionSetter({ mobile, tabPort, tabLand }: dimensionSetterProp) {
    if (tabPortrait) {
      return tabPort;
    } else if (tabLandscape) {
      return tabLand;
    } else if (!tabLandscape && !tabPortrait) {
      return mobile;
    }
  }

  function inputFieldStyle() {
    return [
      styles.inputField,
      {
        height: dimensionSetter({
          mobile: screenHeight * 0.05,
          tabPort: screenHeight * 0.05,
          tabLand: screenHeight * 0.06,
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

  function KeyIcon() {
    return (
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
    );
  }

  function EyeIcon() {
    return (
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
    );
  }

  function UserIcon() {
    return (
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
    );
  }

  useEffect(() => {
    // Added listener to keep track of Tablet's orientation
    Dimensions.addEventListener("change", ({ window }) => {
      setScreenHeight(window.height);
      setScreenWidth(window.width);
      (async () => {
        const orientation = await Screen.getOrientationAsync();
        if (orientation == 1 || orientation == 2) {
          setTabPortrait(true);
          setTabLandscape(false);
        } else {
          setTabLandscape(true);
          setTabPortrait(false);
        }
      })();
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const deviceType = await Device.getDeviceTypeAsync();
        if (deviceType == 2) {
          const orientation = await Screen.getOrientationAsync();
          if (orientation == 1 || orientation == 2) {
            setTabPortrait(true);
          } else setTabLandscape(true);
        }
      })();
    }, [])
  );

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
            mobile: screenHeight * 0.15,
            tabPort: screenHeight * 0.15,
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
              width: dimensionSetter({
                mobile: "80%",
                tabPort: "50%",
                tabLand: "30%",
              }),
            },
          ]}
        >
          <View style={inputFieldStyle()}>
            <UserIcon />
            <TextInput
              style={inputTextStyle()}
              placeholder="User Name"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              onChangeText={(text)=>{}}
              />
          </View>
          <View style={inputFieldStyle()}>
            <UserIcon />
            <TextInput
              style={inputTextStyle()}
              placeholder="Email"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              onChangeText={(text)=>{}}
              />
          </View>
          <View style={inputFieldStyle()}>
            <KeyIcon />
            <TextInput
              style={inputPasswordStyle()}
              placeholder="Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              secureTextEntry={secureTextEntry}
              onChangeText={(text)=>{}}
              />
            <EyeIcon />
          </View>
          <View style={inputFieldStyle()}>
            <KeyIcon />
            <TextInput
              style={inputPasswordStyle()}
              placeholder="Confirm Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
              secureTextEntry={secureTextEntry}
              onChangeText={(text)=>{}}
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
    justifyContent: "center",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    gap: deviceHeight * 0.015,
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
    fontSize: deviceWidth * 0.04,
    fontFamily: "Poppins-Regular",
  },
});
