import { useContext } from "react";
import { View, Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../Components/Constants/Colors";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";
interface propsType {
  title?: string;
  showModal: boolean;
  setShowModal: (value: "verify" | "resend" | "cancel") => void;
}

export default function OTPVerifyModal(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
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
        // height: screenHeight * 0.5,
        backgroundColor: Colors.primary,
        borderRadius: screenHeight * 0.02,
        height: (isTabPortrait ? moderateVerticalScale(300, 0.5):(isTabLandscape ? moderateVerticalScale(290, 0.5): moderateVerticalScale(350,0.5))),
        width: (isTabPortrait ? moderateVerticalScale(350, 0.5):(isTabLandscape ? moderateVerticalScale(350, 0.5): moderateVerticalScale(320,0.5))),
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: fontBold,
          fontSize: (isTabPortrait ? moderateVerticalScale(15, 0.5):(isTabLandscape ? moderateVerticalScale(15, 0.5): moderateVerticalScale(19,0.5))),
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
          fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(14,0.5))),
        }}
      >
        We have sent OTP to your Mobile Number
      </Text>
      <OtpInput
        numberOfDigits={4}
        focusColor={Colors.active}
        theme={{
          containerStyle: {
            width: (isTabPortrait ? moderateVerticalScale(250, 0.5):(isTabLandscape ? moderateVerticalScale(250, 0.5): moderateVerticalScale(250,0.5))),
            alignItems: "center",
            justifyContent: "center",
          },
          pinCodeTextStyle: {
            fontFamily: fontBold,
            color: Colors.primary,
            fontSize: (isTabPortrait ? moderateVerticalScale(25, 0.5):(isTabLandscape ? moderateVerticalScale(25, 0.5): moderateVerticalScale(35,0.5))),
          },
          pinCodeContainerStyle: {
            backgroundColor: "#fff",
            width: (isTabPortrait ? moderateVerticalScale(50, 0.5):(isTabLandscape ? moderateVerticalScale(50, 0.5): moderateVerticalScale(55,0.5))),
            height: (isTabPortrait ? moderateScale(45, 0.5):(isTabLandscape ? moderateScale(45, 0.5): moderateScale(65,0.5))),
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
          zIndex={2}
          title="Submit"
          onPressed={() => props.setShowModal("verify")}
          width={(isTabPortrait ? moderateVerticalScale(250, 0.5):(isTabLandscape ? moderateVerticalScale(250, 0.5): moderateVerticalScale(250,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
        <TextButton
          title="Resend"
          color={Colors.secondary}
          fontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
          textDecorationLine="underline"
          onPressed={() => props.setShowModal("resend")}
        />
      </View>
    </CustomModal>
  );
}
