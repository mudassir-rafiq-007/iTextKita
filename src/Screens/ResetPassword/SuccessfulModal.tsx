import { useContext } from "react";
import { Text } from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";
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
        backgroundColor: Colors.primary,
        borderRadius: screenHeight * 0.02,
        gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
        height: (isTabPortrait ? moderateVerticalScale(300, 0.5):(isTabLandscape ? moderateVerticalScale(290, 0.5): moderateVerticalScale(350,0.5))),
        width: (isTabPortrait ? moderateVerticalScale(350, 0.5):(isTabLandscape ? moderateVerticalScale(350, 0.5): moderateVerticalScale(320,0.5))),
      }}
    >
      <AntDesignIcons
        color={"green"}
        name="checkcircle"
        size={(isTabPortrait ? moderateVerticalScale(100, 0.5):(isTabLandscape ? moderateVerticalScale(100, 0.5): moderateVerticalScale(100,0.5)))}
      />
      <Text
        style={{
          width: "70%",
          color: "#fff",
          textAlign: "center",
          fontFamily: fontBold,
          fontSize: (isTabPortrait ? moderateVerticalScale(20, 0.5):(isTabLandscape ? moderateVerticalScale(20, 0.5): moderateVerticalScale(20,0.5))),
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
          fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5))),
        }}
      >
        You may now Login using new password.
      </Text>
      {/* <FlatButton
        title="Ok"
        width={"50%"}
        onPressed={() => props.setShowModal(false)}
      /> */}
         <FlatButton
          zIndex={2}
          title="Ok"
          onPressed={() => props.setShowModal(false)}
          width={(isTabPortrait ? moderateVerticalScale(250, 0.5):(isTabLandscape ? moderateVerticalScale(250, 0.5): moderateVerticalScale(250,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
    </CustomModal>
  );
}
