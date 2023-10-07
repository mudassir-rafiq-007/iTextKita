import { useEffect, useContext } from "react";
import {
  View,
  Platform,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import UserIcon from "../../../assets/images/user.svg";
import PhoneIcon from "../../../assets/images/phone.svg";
import Want2Subscribe from "../../../assets/images/buzbg.svg";
import ManBackground from "../../../assets/images/man-bg.svg";
import Grass from "../../../assets/images/bg3.svg";
import ManIcon from "../../../assets/images/newbg.svg";
import Header from "../../Components/Header/Header";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function BusinessName(props: propsType) {
  const {
    screenHeight,
    screenWidth,
    isTabPortrait,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

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
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.025,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
        marginTop:
          Platform.OS == "android"
            ? dimensionSetter({
                mobile: screenHeight * 0.01,
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

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="BUSINESS NAME" />,
    });
  }, []);

  return (
    <ScrollView
      style={{ height: "100%" }}
      keyboardShouldPersistTaps={"handled"}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: screenHeight * 0.02,
      }}
    >
      <View
        style={[
          styles.form,
          {
            zIndex: 3,
            gap: screenHeight * 0.03,
            width: dimensionSetter({
              mobile: "80%",
              tabPort: "50%",
              tabLand: "30%",
            }),
          },
        ]}
      >
        <View style={inputFieldStyle()}>
          <UserIcon
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
            placeholder="Name"
            textAlignVertical="center"
            placeholderTextColor={"#c7c6c5"}
          />
        </View>
        <View style={inputFieldStyle()}>
          <PhoneIcon
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
            placeholder="+63 9 Number"
            textAlignVertical="center"
            placeholderTextColor={"#c7c6c5"}
          />
        </View>
        <FlatButton title="Subscribe" onPressed={() => {}} zIndex={2} />
      </View>
      <View
        style={{
          zIndex: 2,
          position: "absolute",
          aspectRatio: 567 / 664,
          width: dimensionSetter({
            mobile: screenWidth * 0.8,
            tabPort: screenWidth * 0.6,
            tabLand: screenWidth * 0.36,
          }),
          left: dimensionSetter({
            mobile: screenWidth * 0.2,
            tabPort: screenWidth * 0.4,
            tabLand: screenWidth * 0.6,
          }),
          bottom: dimensionSetter({
            mobile: -screenHeight * 0.03,
            tabPort: 0,
            tabLand: -screenHeight * 0.05,
          }),
        }}
      >
        <ManIcon width={"100%"} height={"100%"} />
      </View>

      <View
        style={{
          zIndex: 1,
          position: "absolute",
          aspectRatio: 800 / 541,
          width: dimensionSetter({
            mobile: screenWidth * 1.5,
            tabPort: screenWidth,
            tabLand: screenWidth,
          }),
          bottom: isTabLandscape ? -screenHeight * 0.15 : 0,
        }}
      >
        <Grass width={"100%"} height={"100%"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
});
