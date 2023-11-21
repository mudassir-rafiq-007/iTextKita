import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Stores from "./Stores";
import UserDetails from "./UserDetails";
import AvailableCredits from "./AvailableCredits";
import Header from "../../../Components/Header/Header";
import FlatButton from "../../../Components/Buttons/FlatButton";
import TwoPersons from "../../../Components/TwoPersons/TwoPersons";
import GradientView from "../../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Profile(props: propsType) {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="ACCOUNT PROFILE" />,
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <GradientView
      style={[
        styles.main,
        {
          gap: screenHeight * 0.03,
          flexDirection: isTabLandscape ? "row" : null,
          alignItems: isTabLandscape ? "flex-start" : "center",
          justifyContent: isTabLandscape ? "space-around" : null,
        },
      ]}
    >
      <View
        style={{
          zIndex: 2,
          alignItems: "center",
          width: isTabLandscape ? "50%" : "100%",
          gap: isTabLandscape ? screenHeight * 0.07 : screenHeight * 0.02,
        }}
      >
        <UserDetails navigate={props.navigation.navigate}/>
        <AvailableCredits />
        {isTabLandscape && (
          <FlatButton
            title="Log Out"
            onPressed={() => {}}
            width={dimensionSetter({
              mobile: "90%",
              tabPort: "70%",
              tabLand: "50%",
            })}
          />
        )}
      </View>
      <View
        style={{
          zIndex: 2,
          alignItems: "center",
          width: isTabLandscape ? "50%" : "100%",
          gap: isTabLandscape ? screenHeight * 0.07 : screenHeight * 0.01,
        }}
      >
        <Stores />
        <View
          style={{
            alignItems: "center",
            width: dimensionSetter({
              mobile: "90%",
              tabPort: "70%",
              tabLand: "60%",
            }),
          }}
        >
          <FlatButton
            title="Add New Store"
            onPressed={() => {}}
            width={isTabLandscape ? "80%" : "100%"}
            marginVertical={isTabLandscape ? null : screenHeight * 0.02}
          />
          {!isTabLandscape && (
            <FlatButton
              title="Log Out"
              onPressed={() => {}}
            />
          )}
        </View>
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
