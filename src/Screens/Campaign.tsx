import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useContext } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import SendIcon from "react-native-vector-icons/FontAwesome";
import TwoPersons from "../../assets/bgt.svg";
import Header from "../Components/Header/Header";
import Dropdown from "../Components/Dropdown/Dropdown";
import { Colors } from "../Components/Constants/Colors";
import FlatButton from "../Components/Buttons/FlatButton";
import { DimensionsContext } from "../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Campaign(props: propsType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  function tileWidth() {
    return {
      width: dimensionSetter({
        mobile: "90%",
        tabPort: "70%",
        tabLand: "40%",
      }),
    };
  }

  const dummyMsg =
    "Hello David,\nWe are launching our new product called “Isaw ng Manok” and we would like to invited you to join us in our launching day with free entrance!\nSee out poster @\nhttps://testing.com/page";

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="CAMPAIGN" />,
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
        locations={[0.4, 1]}
        colors={["#FFFFFF", "#008080"]}
        style={[styles.container, { gap: screenHeight * 0.02 }]}
      >
        <View
          style={[
            styles.tileView,
            tileWidth(),
            {
              justifyContent: "center",
              height: screenHeight * 0.06,
              paddingTop: screenHeight * 0.01,
            },
          ]}
        >
          <Text
            style={[
              styles.tileText,
              { opacity: 1, fontSize: screenHeight * 0.03 },
            ]}
          >
            Title
          </Text>
        </View>
        <TextInput
          multiline={true}
          placeholder={dummyMsg}
          onChangeText={(text) => {}}
          placeholderTextColor={Colors.primary}
          style={[
            styles.textInput,
            tileWidth(),
            {
              fontSize: dimensionSetter({
                mobile: screenHeight * 0.02,
                tabPort: screenHeight * 0.02,
                tabLand: screenHeight * 0.025,
              }),
              paddingVertical: dimensionSetter({
                mobile: screenHeight * 0.03,
                tabPort: screenHeight * 0.03,
                tabLand: screenHeight * 0.02,
              }),
              paddingHorizontal: dimensionSetter({
                mobile: screenWidth * 0.05,
                tabPort: screenWidth * 0.05,
                tabLand: screenWidth * 0.03,
              }),
            },
          ]}
        />
        <TouchableOpacity
          style={[
            styles.tileView,
            tileWidth(),
            {
              height: screenHeight * 0.06,
              paddingTop: screenHeight * 0.005,
              paddingHorizontal: screenWidth * 0.03,
            },
          ]}
          onPress={() => props.navigation.navigate("CustomerName")}
        >
          <Text
            style={[
              styles.tileText,
              {
                fontSize: dimensionSetter({
                  mobile: screenHeight * 0.02,
                  tabPort: screenHeight * 0.02,
                  tabLand: screenHeight * 0.03,
                }),
              },
            ]}
          >
            Select Customer
          </Text>
          <SendIcon
            name="send"
            color={Colors.primary}
            size={screenHeight * 0.02}
            style={{
              padding: screenHeight * 0.01,
              backgroundColor: Colors.secondary,
            }}
          />
        </TouchableOpacity>
        <Dropdown showDropdown={false} />
        <FlatButton title="Send" onPressed={() => {}} zIndex={2} />
        <TwoPersons
          height={dimensionSetter({
            mobile: screenHeight * 0.2,
            tabPort: screenHeight * 0.25,
            tabLand: screenHeight * 0.8,
          })}
          width={dimensionSetter({
            mobile: screenHeight * 0.5,
            tabPort: screenHeight * 0.6,
            tabLand: screenWidth * 0.8,
          })}
          opacity={dimensionSetter({ mobile: 1, tabPort: 1, tabLand: 0.5 })}
          style={dimensionSetter({
            mobile: null,
            tabPort: null,
            tabLand: {
              zIndex: 1,
              position: "absolute",
              alignItems: "center",
            },
          })}
        />
      </LinearGradient>
    </ScrollView>
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
    zIndex: 2,
    alignItems: "center",
    flexDirection: "row",
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#084A5B",
    justifyContent: "space-between",
    elevation: 10,
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowColor: "#000",
    shadowOffset: { height: 4, width: 0 },
  },
  tileText: {
    zIndex: 2,
    opacity: 0.5,
    color: "white",
    textAlignVertical: "center",
    fontFamily: "Poppins-Regular",
  },
  textInput: {
    zIndex: 2,
    height: "auto",
    color: "#084A5B",
    textAlign: "justify",
    borderTopLeftRadius: 30,
    backgroundColor: "#D9D9D9",
    borderBottomRightRadius: 30,
    elevation: 10,
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowColor: "#000",
    shadowOffset: { height: 4, width: 0 },
  },
  dropdownIcon: {
    zIndex: 2,
    borderRadius: 100,
    backgroundColor: "#F6851F",
  },
});
