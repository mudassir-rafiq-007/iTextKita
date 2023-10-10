import { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Dropdown from "./Dropdown";
import Lady from "../../../assets/images/sms.svg";
import Header from "../../Components/Header/Header";
import { shadow } from "../../Components/Constants/Shadow";
import TwoPersons from "../../../assets/images/two-persons.svg";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function RecentSMSStatus(props: propsType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  function dropdownSwitch() {
    setShowDropdown((current) => (current ? false : true));
  }

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const customers = ["Jerry", "Matries", "Newman", "Rachel", "Ross", "Jake"];

  function listViewStyle() {
    return [
      styles.listView,
      {
        paddingTop: screenHeight * 0.03,
        width: dimensionSetter({
          mobile: "100%",
          tabPort: "80%",
          tabLand: "50%",
        }),
      },
    ];
  }

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="RECENT SMS STATUS" />,
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      style={{ height: "100%" }}
      keyboardShouldPersistTaps={"handled"}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LinearGradient
        style={styles.main}
        locations={[0.4, 1]}
        colors={["#FFFFFF", "#008080"]}
      >
        <Lady height={screenHeight * 0.1} width={screenWidth * 0.5} />
        <View style={listViewStyle()}>
          <FlatList
            data={customers}
            scrollEnabled={false}
            contentContainerStyle={{ gap: screenHeight * 0.005 }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={dropdownSwitch}>
                <Dropdown showDropdown={showDropdown} name={item} />
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={[
            styles.twoPersons,
            {
              opacity: dimensionSetter({
                mobile: 0.8,
                tabPort: 0.8,
                tabLand: 0.4,
              }),
              bottom: dimensionSetter({
                mobile: screenHeight * 0.05,
                tabPort: screenHeight * 0.03,
                tabLand: screenHeight * 0.001,
              }),
            },
          ]}
        >
          <TwoPersons
            height={dimensionSetter({
              mobile: screenHeight * 0.2,
              tabPort: screenHeight * 0.3,
              tabLand: screenHeight * 0.6,
            })}
            width={screenWidth * 0.8}
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    zIndex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  listView: {
    zIndex: 2,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#D3D3D3",
  },
  tileView: {
    ...shadow,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  twoPersons: {
    zIndex: 1,
    position: "absolute",
  },
});
