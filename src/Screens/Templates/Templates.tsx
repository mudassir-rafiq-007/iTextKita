import { useEffect, useContext } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from "../../Components/Header/Header";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../../assets/images/two-persons.svg";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { useFonts } from "expo-font";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Templates(props: propsType) {
  const { screenHeight, screenWidth, dimensionSetter } =
    useContext(DimensionsContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const data = [
    { key: 1, value: "Youtube Link" },
    { key: 2, value: "Days Available Online" },
    { key: 3, value: "Facebook Page ID" },
    { key: 4, value: "Instagram Page ID" },
    { key: 5, value: "Messenger Page ID" },
    { key: 6, value: "Add Poster Upto 3MB" },
    { key: 7, value: "Status" },
    { key: 8, value: "Expiration Date" },
    { key: 9, value: "URL" },
  ];

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="TEMPLATES" />,
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      locations={[0.4, 1]}
      colors={["#FFFFFF", "#008080"]}
      style={[
        styles.container,
        {
          gap: screenHeight * 0.03,
          paddingTop: screenHeight * 0.01,
        },
      ]}
    >
      <View
        style={{
          zIndex: 2,
          height: screenHeight * 0.6,
          width: dimensionSetter({
            mobile: screenWidth * 0.9,
            tabPort: screenWidth * 0.6,
            tabLand: screenWidth * 0.4,
          }),
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.tileView, { height: screenHeight * 0.06 }]}
            >
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: screenHeight * 0.02,
                  fontFamily: "Poppins-Regular",
                  marginTop:
                    Platform.OS == "android" ? screenHeight * 0.008 : null,
                }}
              >
                {item.value}
              </Text>
              <AntDesign
                name="right"
                color={"#0006"}
                size={screenHeight * 0.02}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <FlatButton
        title="New Template"
        onPressed={() => props.navigation.navigate("Online Marketing")}
        zIndex={2}
      />
      <TwoPersons
        height={dimensionSetter({
          mobile: screenHeight * 0.2,
          tabPort: screenHeight * 0.3,
          tabLand: screenHeight * 0.6,
        })}
        width={screenWidth * 0.8}
        style={[
          styles.twoPersons,
          {
            opacity: dimensionSetter({
              mobile: 0.5,
              tabPort: 0.5,
              tabLand: 0.1,
            }),
            bottom: dimensionSetter({
              mobile: screenHeight * 0.05,
              tabPort: screenHeight * 0.03,
              tabLand: screenHeight * 0.001,
            }),
          },
        ]}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  tileView: {
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: "2%",
    borderBottomColor: "#0002",
    justifyContent: "space-between",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
