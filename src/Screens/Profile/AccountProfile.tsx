import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import Stores from "./StoreDetails/Stores";
import UserDetails from "./UserDetails/UserDetails";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import AvailableCredits from "./AvailableCredits/AvailableCredits";
import GradientView from "../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import NewStoreRegistration from "../NewStoreRegistration/NewStoreRegistration";

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
          flexDirection: isTabLandscape ? "row" : null,
          justifyContent: isTabLandscape ? "center" : null,
          alignItems: isTabLandscape ? "flex-start" : "center",
        },
      ]}
    >
      <View
        style={{
          zIndex: 2,
          width: isTabLandscape ? "45%" : "100%",
          alignItems: isTabLandscape ? null : "center",
          gap: isTabLandscape ? screenHeight * 0.04 : screenHeight * 0.02,
        }}
      >
        <UserDetails navigate={props.navigation.navigate} />
        <AvailableCredits navigate={props.navigation.navigate} />
        {isTabLandscape && (
          <FlatButton
            title="Log Out"
            onPressed={() => props.navigation.navigate("Login", {})}
            width={dimensionSetter({
              mobile: "90%",
              tabPort: "70%",
              tabLand: "70%",
            })}
          />
        )}
      </View>
      <View
        style={{
          zIndex: 2,
          alignItems: "center",
          width: isTabLandscape ? "45%" : "100%",
          gap: isTabLandscape ? screenHeight * 0.07 : screenHeight * 0.01,
        }}
      >
        <Stores navigate={props.navigation.navigate} />
        <View
          style={{
            alignItems: "center",
            width: dimensionSetter({
              mobile: "90%",
              tabPort: "70%",
              tabLand: "100%",
            }),
          }}
        >
          <FlatButton
            title="Add New Store"
            onPressed={() => setShowStoreRegisterModal(true)}
            width={isTabLandscape ? "80%" : "100%"}
            marginVertical={isTabLandscape ? null : screenHeight * 0.02}
          />
          {!isTabLandscape && (
            <FlatButton
              title="Log Out"
              onPressed={() => props.navigation.navigate("Login", {})}
            />
          )}
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
