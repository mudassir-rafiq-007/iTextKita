import { useEffect, useContext } from "react";
import {
  ScrollView,
  TextInput,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import UserIcon from "../../../assets/user.svg";
import PhoneIcon from "../../../assets/phone.svg";
import Want2Subscribe from "../../../assets/want.svg";
import ManBackground from "../../../assets/man-bg.svg";
import Header from "../../Components/Header/Header";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import FlatButton from "../../Components/Buttons/FlatButton";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function BusinessName(props: propsType) {
  const { screenHeight, screenWidth, dimensionSetter } =
    useContext(DimensionsContext);

  function inputFieldStyle() {
    return [
      styles.inputField,
      {
        height: dimensionSetter({
          mobile: screenHeight * 0.06,
          tabPort: screenHeight * 0.05,
          tabLand: screenHeight * 0.06,
        }),
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
        paddingTop: screenHeight * 0.02,
      }}
    >
      <View
        style={[
          styles.form,
          {
            zIndex: 2,
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
          zIndex: 1,
          position: "absolute",
          width: screenWidth,
          aspectRatio: 360 / 557,
          bottom: -screenHeight * 0.05,
        }}
      >
        <ManBackground height={"100%"} width={"100%"} />
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
