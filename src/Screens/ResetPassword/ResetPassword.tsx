import {
  Text,
  View,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { useContext, useState } from "react";
import EntypeIcons from "react-native-vector-icons/Entypo";
import { Colors } from "../../Components/Constants/Colors";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";

//fontSize: (isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))),
interface propsType {
  modalVisible: boolean;
  setShowModal: (string: "cancel" | "submit") => void;
}

export default function ResetPassword(props: propsType) {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
    dimensionSetter,
  } = useContext(DimensionsContext);

  function containerStyle(): StyleProp<ViewStyle> {
    return {
      zIndex: 2,
      alignItems: "center",
      justifyContent: "center",
      gap: screenHeight * 0.03,
      backgroundColor: Colors.primary,
      borderRadius: screenHeight * 0.03,
      height: (isTabPortrait ? moderateVerticalScale(320, 0.5):(isTabLandscape ? moderateVerticalScale(290, 0.5): moderateVerticalScale(350,0.5))),
      width: (isTabPortrait ? moderateVerticalScale(350, 0.5):(isTabLandscape ? moderateVerticalScale(350, 0.5): moderateVerticalScale(320,0.5))),
      // height: (isTabPortrait ? moderateScale(250, 0.5):(isTabLandscape ? moderateScale(250, 0.5): moderateScale(350,0.5))),
      // width: (isTabPortrait ? moderateVerticalScale(400, 0.5):(isTabLandscape ? moderateVerticalScale(400, 0.5): moderateVerticalScale(320,0.5))),
    };
  }

  function inputLabelStyle(): StyleProp<TextStyle> {
    return {
      color: "white",
      fontFamily: fontRegular,
      alignSelf: "flex-start",
      fontSize: (isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))),
    };
  }

  function inputFieldStyle(): StyleProp<ViewStyle> {
    return [
      styles.inputField,
      {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: screenHeight * 0.005,
        width: (isTabPortrait ? moderateVerticalScale(280, 0.5):(isTabLandscape ? moderateVerticalScale(260, 0.5): moderateVerticalScale(270,0.5))),
        paddingHorizontal: screenWidth * 0.01,
        height: (isTabPortrait ? moderateScale(21, 0.5):(isTabLandscape ? moderateScale(21, 0.5): moderateScale(30,0.5))),
      },
    ];
  }

  function textInputStyle() {
    return [
      styles.textInput,
      {  
        // height: isTabLandscape ? screenHeight * 0.07 : screenHeight * 0.06,
        color: Colors.primary,
        fontFamily: fontRegular,
        fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))),
        // marginHorizontal: dimensionSetter({
        //   mobile: screenWidth * 0.02,
        //   tabPort: screenWidth * 0.01,
        //   tabLand: screenWidth * 0.005,
        // }),
      },
    ];
  }

  return (
    <CustomModal
      modalVisible={props.modalVisible}
      screenHeight={screenHeight}
      style={containerStyle()}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: fontBold,
          // fontSize: screenHeight * 0.03,
          fontSize: (isTabPortrait ? moderateVerticalScale(15, 0.5):(isTabLandscape ? moderateVerticalScale(15, 0.5): moderateVerticalScale(19,0.5))),
          marginBottom: screenHeight * 0.01,
        }}
      >
        Reset Password
      </Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          gap: screenHeight * 0.01,
        }}
      >
        <View>
          <Text style={inputLabelStyle()}>Mobile Number *</Text>
          <View style={inputFieldStyle()}>
            <TextInput
              style={textInputStyle()}
              placeholder="+123 456 7890"
              textAlignVertical="center"
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.primary}
            />
          </View>
        </View>
        <View>
          <Text style={inputLabelStyle()}>Password *</Text>
          <View style={inputFieldStyle()}>
            <TextInput
              style={textInputStyle()}
              placeholder="Password"
              textAlignVertical="center"
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.primary}
            />
            <EntypeIcons
              name={secureTextEntry ? "eye" : "eye-with-line"}
              color={Colors.primary}
              size={(isTabPortrait ? moderateScale(15, 0.5):(isTabLandscape ? moderateScale(15, 0.5): moderateScale(20,0.5)))}
              // style={{
              //   marginRight: dimensionSetter({
              //     mobile: screenWidth * 0.04,
              //     tabPort: screenWidth * 0.04,
              //     tabLand: screenWidth * 0.01,
              //   }),
              // }}
              onPress={() =>
                setSecureTextEntry((current) => (current ? false : true))
              }
            />
          </View>
        </View>
        <View>
          <Text style={inputLabelStyle()}>Confirm Password *</Text>
          <View style={inputFieldStyle()}>
            <TextInput
              style={textInputStyle()}
              placeholder="Confirm Password"
              textAlignVertical="center"
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.primary}
            />
            <EntypeIcons
              name={secureTextEntry ? "eye" : "eye-with-line"}
              color={Colors.primary}
              size={(isTabPortrait ? moderateScale(15, 0.5):(isTabLandscape ? moderateScale(15, 0.5): moderateScale(20,0.5)))}
              // style={{
              //   marginRight: dimensionSetter({
              //     mobile: screenWidth * 0.04,
              //     tabPort: screenWidth * 0.04,
              //     tabLand: screenWidth * 0.01,
              //   }),
              // }}
              onPress={() =>
                setSecureTextEntry((current) => (current ? false : true))
              }
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          gap: screenHeight * 0.01,
        }}
      >
        <FlatButton
          zIndex={2}
          title="Submit"
          onPressed={() => props.setShowModal("submit")}
          width={(isTabPortrait ? moderateVerticalScale(270, 0.5):(isTabLandscape ? moderateVerticalScale(260, 0.5): moderateVerticalScale(250,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
{/* 
        <TextButton
          title="Cancel"
          textDecorationLine="underline"
          onPressed={() => props.setShowModal("cancel")}
        /> */}
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff0",
  },
  inputField: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    textAlignVertical: "center",
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "#c7c6c5",
    justifyContent: "center",
    textAlignVertical: "center",
  },
});
