import { useContext } from "react";
import { Text } from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function ThankyouModal(props: propsType) {
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
        gap: screenHeight * 0.02,
        backgroundColor: Colors.primary,
        borderRadius: screenHeight * 0.02,
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
          fontFamily: "Poppins-Bold",
          fontSize: screenHeight * 0.04,
        }}
      >
        Thank You!
      </Text>
      <Text
        style={{
          width: "70%",
          color: "#fff",
          textAlign: "center",
          fontFamily: fontFamily,
          fontSize: screenHeight * 0.02,
        }}
      >
        We will let you know once your Sender ID is registered
      </Text>
      <FlatButton
        title="Ok"
        onPressed={() => props.setShowModal(false)}
        width={"50%"}
      />
    </CustomModal>
  );
}
