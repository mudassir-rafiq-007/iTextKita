import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import InputField from "../../Components/InputField/InputField";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  modalVisible: boolean;
  setShowModal: (string: "cancel" | "submit") => void;
}

export default function ResetPassword(props: propsType) {
  const { fontBold, isMobile, screenHeight, valueFor } =
    useContext(DimensionsContext);

  return (
    <CustomModal
      modalVisible={props.modalVisible}
      screenHeight={screenHeight}
      style={[
        styles.main,
        {
          width: isMobile
            ? moderateVerticalScale(320)
            : moderateVerticalScale(350),
          height: valueFor({
            mobile: moderateVerticalScale(350),
            tabPortrait: moderateVerticalScale(320),
            tabLandscape: moderateVerticalScale(290),
          }),
        },
      ]}
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
        Reset Password
      </Text>
      <View style={styles.form}>
        <InputField title="Mobile Number" placeholder="+123 456 7890" />
        <InputField
          title="Password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <InputField
          title="Confrim Password"
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <FlatButton
          zIndex={2}
          title="Submit"
          width={moderateVerticalScale(250)}
          onPressed={() => props.setShowModal("submit")}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  main: {
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: moderateVerticalScale(20),
    backgroundColor: Colors.primary,
    borderRadius: moderateVerticalScale(20),
  },
  form: {
    width: "80%",
    alignItems: "center",
    gap: moderateVerticalScale(5),
  },
});
