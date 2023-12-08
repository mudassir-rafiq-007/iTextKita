import { useContext } from "react";
import { View, Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Colors } from "../../Components/Constants/Colors";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  title?: string;
  showModal: boolean;
  setShowModal: (value: "verify" | "resend" | "cancel") => void;
}

export default function OTPVerifyModal(props: propsType) {
  const { fontBold, fontRegular, isMobile, screenHeight, valueFor } =
    useContext(DimensionsContext);
  return (
    <CustomModal
      modalVisible={props.showModal}
      screenHeight={screenHeight}
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: screenHeight * 0.03,
        backgroundColor: Colors.primary,
        borderRadius: screenHeight * 0.02,
        height: valueFor({
          mobile: moderateVerticalScale(350),
          tabPortrait: moderateVerticalScale(300),
          tabLandscape: moderateVerticalScale(290),
        }),
        width: isMobile
          ? moderateVerticalScale(320)
          : moderateVerticalScale(350),
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: fontBold,
          fontSize: isMobile
            ? moderateVerticalScale(19)
            : moderateVerticalScale(15),
        }}
      >
        {props.title || "OTP Verify"}
      </Text>
      <Text
        style={{
          color: "#fff",
          width: "80%",
          textAlign: "center",
          fontFamily: fontRegular,
          fontSize: isMobile
            ? moderateVerticalScale(14)
            : moderateVerticalScale(12),
        }}
      >
        We have sent OTP to your Mobile Number
      </Text>
      <OtpInput
        numberOfDigits={4}
        focusColor={Colors.active}
        theme={{
          containerStyle: {
            alignItems: "center",
            justifyContent: "center",
            width: moderateVerticalScale(250),
          },
          pinCodeTextStyle: {
            fontFamily: fontBold,
            color: Colors.primary,
            fontSize: isMobile
              ? moderateVerticalScale(35)
              : moderateVerticalScale(25),
          },
          pinCodeContainerStyle: {
            backgroundColor: "#fff",
            borderColor: Colors.secondary,
            borderRadius: screenHeight * 0.005,
            height: isMobile ? moderateScale(65) : moderateScale(45),
            width: isMobile
              ? moderateVerticalScale(55)
              : moderateVerticalScale(50),
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
          zIndex={2}
          title="Submit"
          width={moderateVerticalScale(250)}
          onPressed={() => props.setShowModal("verify")}
        />
        <TextButton
          title="Resend"
          color={Colors.secondary}
          textDecorationLine="underline"
          fontSize={
            isMobile ? moderateVerticalScale(15) : moderateVerticalScale(12)
          }
          onPressed={() => props.setShowModal("resend")}
        />
      </View>
    </CustomModal>
  );
}
