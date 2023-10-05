import { useContext, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import TwoPersons from "../../../assets/images/bgt.svg";
import Header from "../../Components/Header/Header";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function CustomerName(props: propsType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const customers = [
    "David H.",
    "Matries",
    "Newman",
    "George",
    "Rachel",
    "Marsh",
    "Angela",
  ];

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="CUSTOMER NAME" />,
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      locations={[0.5, 1]}
      style={[
        styles.container,
        {
          gap: screenHeight * 0.03,
          justifyContent: dimensionSetter({
            mobile: "center",
            tabPort: "center",
            tabLand: "flex-start",
          }),
        },
      ]}
      colors={["#FFFFFF", "#008080"]}
    >
      <View
        style={{
          zIndex: 2,
          borderWidth: 2,
          borderColor: "#dedddc",
          width: dimensionSetter({
            mobile: screenWidth * 0.9,
            tabPort: screenWidth * 0.7,
            tabLand: screenWidth * 0.4,
          }),
          height: screenHeight * 0.3,
          backgroundColor: "#dedddc",
        }}
      >
        <FlatList
          scrollEnabled
          data={customers}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                elevation: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                height: screenHeight * 0.06,
                marginVertical: screenHeight * 0.001,
                marginHorizontal: screenWidth * 0.01,
              }}
            >
              <Text
                style={{
                  color: Colors.primary,
                  fontFamily: "Poppins-Bold",
                  fontSize: screenHeight * 0.02,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          zIndex: 2,
          alignItems: "center",
          justifyContent: "center",
          gap: screenHeight * 0.02,
        }}
      >
        <View
          style={{
            width: dimensionSetter({
              mobile: screenWidth,
              tabPort: screenWidth * 0.7,
              tabLand: screenWidth * 0.4,
            }),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <FlatButton
            title="Apply"
            onPressed={() => {}}
            paddingHorizontal={dimensionSetter({
              mobile: screenWidth * 0.05,
              tabPort: screenWidth * 0.04,
              tabLand: screenWidth * 0.02,
            })}
          />
          <FlatButton
            title="Reset"
            onPressed={() => {}}
            paddingHorizontal={dimensionSetter({
              mobile: screenWidth * 0.05,
              tabPort: screenWidth * 0.04,
              tabLand: screenWidth * 0.02,
            })}
          />
        </View>
        <FlatButton
          title="Select All"
          onPressed={() => {}}
          paddingHorizontal={dimensionSetter({
            mobile: screenWidth * 0.05,
            tabPort: screenWidth * 0.04,
            tabLand: screenWidth * 0.02,
          })}
        />
      </View>
      <TwoPersons
        height={dimensionSetter({
          mobile: screenHeight * 0.2,
          tabPort: screenHeight * 0.3,
          tabLand: screenHeight * 0.6,
        })}
        width={dimensionSetter({
          mobile: screenWidth * 0.8,
          tabPort: screenWidth * 0.8,
          tabLand: screenWidth * 0.8,
        })}
        style={dimensionSetter({
          mobile: null,
          tabPort: null,
          tabLand: {
            zIndex: 1,
            opacity: 0.8,
            position: "absolute",
            bottom: screenHeight * 0.001,
          },
        })}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
