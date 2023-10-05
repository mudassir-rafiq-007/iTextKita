import { useContext } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import TermsIcon from "../../../assets/terms.svg";
import ShieldIcon from "../../../assets/shield.svg";
import ITextKita from "../../../assets/iTextKita.svg";
import TwoPersons from "../../../assets/two-persons.svg";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Terms(props: propsType) {
  const { screenHeight, screenWidth, dimensionSetter } =
    useContext(DimensionsContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const terms = [
    "I will not send spam messages.",
    "I will not send spam messages.",
    "I will not send spam messages.",
    "I will not send spam messages.",
    "I will not send spam messages.",
  ];

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      locations={[0.4, 1]}
      colors={["#FFFFFF", "#008080"]}
      style={{ flex: 1, alignItems: "center" }}
    >
      <ITextKita
        height={screenHeight * 0.1}
        width={dimensionSetter({
          mobile: screenWidth * 0.6,
          tabPort: screenWidth * 0.5,
          tabLand: screenWidth * 0.3,
        })}
        style={{
          marginBottom: screenHeight * 0.01,
          marginTop: dimensionSetter({
            mobile: screenHeight * 0.1,
            tabPort: screenHeight * 0.05,
            tabLand: screenHeight * 0.07,
          }),
        }}
      />
      <TermsIcon
        width={screenWidth * 0.6}
        height={dimensionSetter({
          mobile: screenHeight * 0.15,
          tabPort: screenHeight * 0.2,
          tabLand: screenHeight * 0.25,
        })}
      />
      <View
        style={[
          styles.listView,
          {
            height: screenHeight * 0.4,
            width: dimensionSetter({
              mobile: screenWidth * 0.9,
              tabPort: screenWidth * 0.8,
              tabLand: screenWidth * 0.6,
            }),
          },
        ]}
      >
        <FlatList
          data={terms}
          contentContainerStyle={{
            width: "100%",
            gap: screenHeight * 0.005,
            paddingTop: screenHeight * 0.01,
          }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.tileView,
                {
                  height: screenHeight * 0.06,
                  marginHorizontal: screenWidth * 0.02,
                  paddingHorizontal: screenWidth * 0.03,
                },
              ]}
            >
              <ShieldIcon />
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: screenHeight * 0.02,
                  marginHorizontal: screenWidth * 0.02,
                }}
              >
                {item}
              </Text>
            </View>
          )}
        />
      </View>
      <FlatButton
        title="Next"
        onPressed={() => props.navigation.navigate("Login")}
        zIndex={2}
        marginVertical={screenHeight * 0.02}
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
  listView: {
    zIndex: 2,
    borderWidth: 1,
    borderColor: "black",
  },
  tileView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCF3F3",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.5,
    position: "absolute",
  },
});
