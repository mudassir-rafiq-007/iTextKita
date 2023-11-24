import { useContext } from "react";
import { Text } from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function SuccessfulModal(props: propsType) {
  const {
    fontBold,
    fontRegular,
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
        backgroundColor: Colors.primary,
        borderRadius: screenHeight * 0.02,
        gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
        height: isTabLandscape ? screenHeight * 0.6 : screenHeight * 0.5,
        width: dimensionSetter({
          mobile: screenWidth * 0.9,
          tabPort: screenWidth * 0.8,
          tabLand: screenWidth * 0.5,
        }),
      }}
    >
      <AntDesignIcons
        color={"green"}
        name="checkcircle"
        size={screenHeight * 0.15}
      />
      <Text
        style={{
          width: "70%",
          color: "#fff",
          textAlign: "center",
          fontFamily: fontBold,
          fontSize: screenHeight * 0.04,
        }}
      >
        Successful!
      </Text>
      <Text
        style={{
          width: "70%",
          color: "#fff",
          textAlign: "center",
          fontFamily: fontRegular,
          fontSize: screenHeight * 0.02,
        }}
      >
        You may now Login using new password.
      </Text>
      <FlatButton
        title="Ok"
        width={"50%"}
        onPressed={() => props.setShowModal(false)}
      />
    </CustomModal>
  );
}
