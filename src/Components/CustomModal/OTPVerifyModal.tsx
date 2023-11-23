import { useContext } from "react";
import { View, Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomModal from "./CustomModal";
import { Colors } from "../Constants/Colors";
import TextButton from "../Buttons/TextButton";
import FlatButton from "../Buttons/FlatButton";
import { DimensionsContext } from "../Contexts/DimensionsContext";

interface propsType {
  title?: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function OTPVerifyModal(props: propsType) {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);
  return (
    <CustomModal
      modalVisible={props.showModal}
      screenHeight={screenHeight}
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: screenHeight * 0.03,
        height: screenHeight * 0.5,
        backgroundColor: Colors.primary,
        borderRadius: screenHeight * 0.02,
        width: dimensionSetter({
          mobile: "90%",
          tabPort: "70%",
          tabLand: "40%",
        }),
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: "Poppins-Bold",
          fontSize: screenHeight * 0.03,
        }}
      >
        {props.title || "OTP Verify"}
      </Text>
      <Text
        style={{
          color: "#fff",
          width: "80%",
          textAlign: "center",
          fontFamily: fontFamily,
          fontSize: screenHeight * 0.02,
        }}
      >
        We have sent OTP to your Mobile Number
      </Text>
      <OtpInput
        numberOfDigits={4}
        focusColor={Colors.active}
        theme={{
          containerStyle: {
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          },
          pinCodeTextStyle: {
            color: Colors.primary,
          },
          pinCodeContainerStyle: {
            backgroundColor: "#fff",
            width: screenHeight * 0.07,
            height: screenHeight * 0.07,
            borderColor: Colors.secondary,
            borderRadius: screenHeight * 0.005,
          },
        }}
      />
      <View
        style={{
          alignItems: "center",
          marginTop: screenHeight * 0.02,
        }}
      >
        <FlatButton
          title="Verify"
          onPressed={() => props.setShowModal(false)}
          titleFontSize={dimensionSetter({
            mobile: screenWidth * 0.04,
            tabPort: screenWidth * 0.035,
            tabLand: screenWidth * 0.015,
          })}
          width={dimensionSetter({
            mobile: screenWidth * 0.8,
            tabPort: screenWidth * 0.5,
            tabLand: screenWidth * 0.3,
          })}
        />
        <TextButton
          title="Resend"
          color={Colors.secondary}
          fontSize={screenHeight * 0.02}
          textDecorationLine="underline"
          onPressed={() => props.setShowModal(false)}
        />
      </View>
      <View style={{ position: "absolute", top: "3%", right: "3%" }}>
        <MaterialIcons
          name="cancel"
          color={Colors.secondary}
          size={screenHeight * 0.04}
          onPress={() => props.setShowModal(false)}
        />
      </View>
    </CustomModal>
  );
}
