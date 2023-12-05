import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "./InputField";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";

interface propsType {
  modalVisible: boolean;
  setShowModal: (value: "next" | "cancel") => void;
}

export default function NewUserRegistration(props: propsType) {
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
      modalVisible={props.modalVisible}
      screenHeight={screenHeight}
      style={[
        {
          alignItems: "center",
          backgroundColor: Colors.primary,
          borderRadius: screenHeight * 0.03,
          paddingVertical: isTabLandscape ? "2%" : "4%",
          justifyContent: isTabLandscape ? "flex-start" : "center",
          gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
          height: (isTabPortrait ? moderateVerticalScale(380, 0.5):(isTabLandscape ? moderateVerticalScale(370, 0.5): moderateVerticalScale(440,0.5))),
          width: (isTabPortrait ? moderateVerticalScale(350, 0.5):(isTabLandscape ? moderateVerticalScale(350, 0.5): moderateVerticalScale(320,0.5))),
        },
      ]}
    >
      <Text
        style={[
          styles.titleText,
          {
            fontFamily: fontBold,
            fontSize: (isTabPortrait ? moderateVerticalScale(15, 0.5):(isTabLandscape ? moderateVerticalScale(15, 0.5): moderateVerticalScale(19,0.5))),
          },
        ]}
      >
        User Account
      </Text>
      <View
        style={{
          width: "80%",
          justifyContent: isTabLandscape ? "center" : null,
          gap: isTabLandscape ? screenWidth * 0.05 : screenHeight * 0.02,
        }}
      >
        <View
          style={{
            gap: screenHeight * 0.01,
            // width: isTabLandscape ? "40%" : null,
          }}
        >
          <InputField title="First Name" placeholder="John" />
          <InputField title="Last Name" placeholder="Smith" />
          <InputField title="Mobile Number" placeholder="+92 302 4767172" />
          <InputField title="Password" placeholder="Password" secureTextEntry={true}/>
          <InputField secureTextEntry={true} title="Confirm Password" placeholder="Confirm Password" />   
        </View>
      </View>
         <FlatButton
          zIndex={2}
          title="Next"
          onPressed={() => props.setShowModal("next")}
          width={(isTabPortrait ? moderateVerticalScale(250, 0.5):(isTabLandscape ? moderateVerticalScale(250, 0.5): moderateVerticalScale(250,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "#fff",
    textAlign: "center",
  },
});
