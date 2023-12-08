import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { moderateVerticalScale } from "react-native-size-matters";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  message?: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function SuccessfulModal(props: propsType) {
  const { isMobile, fontBold, fontRegular, screenHeight, valueFor } =
    useContext(DimensionsContext);

  return (
    <CustomModal
      modalVisible={props.showModal}
      screenHeight={screenHeight}
      style={[
        styles.main,
        {
          width: isMobile
            ? moderateVerticalScale(320)
            : moderateVerticalScale(350),
          height: valueFor({
            mobile: moderateVerticalScale(350),
            tabPortrait: moderateVerticalScale(300),
            tabLandscape: moderateVerticalScale(290),
          }),
        },
      ]}
    >
      <AntDesignIcons
        color={"green"}
        name="checkcircle"
        size={moderateVerticalScale(100)}
      />
      <Text
        style={{
          width: "70%",
          color: "#fff",
          textAlign: "center",
          fontFamily: fontBold,
          fontSize: moderateVerticalScale(20),
        }}
      >
        Successful!
      </Text>
      <Text
        style={{
          width: "90%",
          color: "#fff",
          textAlign: "center",
          fontFamily: fontRegular,
          fontSize: isMobile
            ? moderateVerticalScale(15)
            : moderateVerticalScale(12),
        }}
      >
        {props.message || "Task Completed Successfuly."}
      </Text>
      <FlatButton
        zIndex={2}
        title="Ok"
        width={moderateVerticalScale(250)}
        onPressed={() => props.setShowModal(false)}
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
});
