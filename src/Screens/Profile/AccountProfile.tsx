import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
// import Stores from "./StoreDetails/Stores";
import UserDetails from "./UserDetails/UserDetails";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import AvailableCredits from "./AvailableCredits/AvailableCredits";
import GradientView from "../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import NewStoreRegistration from "../NewStoreRegistration/NewStoreRegistration";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";

type propsType = {
  navigation: {
    navigate: (screen: string, {}: object) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Profile(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [showStoreRegisterModal, setShowStoreRegisterModal] =
    useState<boolean>(false);

  return (
    <GradientView
      style={[
        styles.main,
        {
          gap: screenHeight * 0.03,
          // flexDirection: isTabLandscape ? "row" : null,
          // justifyContent: isTabLandscape ? "center" : null,
          // alignItems: isTabLandscape ? "flex-start" : "center",
        },
      ]}
    >
      <View
        style={{
          zIndex: 2,
          width: isTabLandscape ? "45%" : "100%",
          alignItems: "center",
          gap: isTabLandscape ? screenHeight * 0.04 : screenHeight * 0.04,
        }}
      >
        <UserDetails navigate={props.navigation.navigate} />
        <AvailableCredits navigate={props.navigation.navigate} />
      </View>
      <View
        style={{
          zIndex: 2,
          alignItems: "center",
          // backgroundColor:"pink",
          width: (isTabPortrait ? moderateVerticalScale(350, 0.5):(isTabLandscape ? moderateVerticalScale(250, 0.5): moderateVerticalScale(300,0.5))),
          // gap: isTabLandscape ? screenHeight * 0.07 : screenHeight * 0.01,
        }}
      >
        {/* <Stores navigate={props.navigation.navigate} /> */}
        <View
          style={{
            alignItems: "center",
            // backgroundColor:"orange",
            // width: dimensionSetter({
            //   mobile: "90%",
            //   tabPort: "70%",
            //   tabLand: "100%",
            // }),
          }}
        >
         <FlatButton
          zIndex={2}
          title="Add New Store"
          onPressed={() => setShowStoreRegisterModal(true)}
          width={(isTabPortrait ? moderateVerticalScale(450, 0.5):(isTabLandscape ? moderateVerticalScale(350, 0.5): moderateVerticalScale(300,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
         <FlatButton
          zIndex={2}
          title="Log Out"
          onPressed={() => props.navigation.navigate("Login", {})}
          width={(isTabPortrait ? moderateVerticalScale(450, 0.5):(isTabLandscape ? moderateVerticalScale(350, 0.5): moderateVerticalScale(300,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
        </View>
        <NewStoreRegistration
          originScreen="Profile"
          modalVisible={showStoreRegisterModal}
          setShowModal={() => setShowStoreRegisterModal(false)}
        />
      </View>
      <TwoPersons style={styles.twoPersons} />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: "4%",
    borderTopWidth: 1,
    alignItems: "center",
    borderColor: "#0003",
    backgroundColor: "white",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
