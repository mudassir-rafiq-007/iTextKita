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
  setShowModal: (value: "next" | "cancel") => void;
}

export default function NewUserRegistration(props: propsType) {
  const { isMobile, fontBold, screenHeight, valueFor } =
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
            mobile: moderateVerticalScale(440),
            tabPortrait: moderateVerticalScale(380),
            tabLandscape: moderateVerticalScale(370),
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
        User Account
      </Text>
      <View style={styles.form}>
        <InputField title="First Name" placeholder="John" />
        <InputField title="Last Name" placeholder="Smith" />
        <InputField title="Mobile Number" placeholder="+123 456 7890" />
        <InputField
          title="Password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <InputField
          secureTextEntry={true}
          title="Confirm Password"
          placeholder="Confirm Password"
        />
      </View>
      <FlatButton
        zIndex={2}
        title="Next"
        width={moderateVerticalScale(250)}
        onPressed={() => props.setShowModal("next")}
      />
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    gap: moderateVerticalScale(15),
    backgroundColor: Colors.primary,
    borderRadius: moderateVerticalScale(20),
  },
  form: {
    width: "80%",
    gap: moderateVerticalScale(5),
  },
});
