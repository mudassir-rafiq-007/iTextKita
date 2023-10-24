import { useEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../Components/Header/Header";
import TwoPersons from "../../../assets/images/bgt.svg";
import PhoneIcon from "../../../assets/images/phone.svg";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    setOptions: ({}: object) => void;
    navigate: (screen: string) => void;
  };
};

export default function BusinessName(props: propsType) {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  function textInputStyle() {
    return [
      styles.textInput,
      {
        fontFamily: fontFamily,
        width: dimensionSetter({
          mobile: "70%",
          tabPort: "80%",
          tabLand: "80%",
        }),
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.025,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
        marginTop: Platform.OS == "android" ? screenHeight * 0.01 : null,
        marginHorizontal: dimensionSetter({
          mobile: screenWidth * 0.01,
          tabPort: screenWidth * 0.01,
          tabLand: screenWidth * 0.005,
        }),
      },
    ];
  }

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="BUSINESS NAME" />,
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <LinearGradient
        colors={["#FFFFFF", "#008080"]}
        locations={[0.5, 1]}
        style={dimensionSetter({
          mobile: [
            styles.container,
            { gap: screenHeight * 0.05, paddingTop: screenHeight * 0.05 },
          ],
          tabPort: [
            styles.container,
            { gap: screenHeight * 0.05, paddingTop: screenHeight * 0.05 },
          ],
          tabLand: [
            styles.container,
            { gap: screenHeight * 0.02, paddingTop: screenHeight * 0.01 },
          ],
        })}
      >
        <View
          style={{ zIndex: 2, alignItems: "center", gap: screenHeight * 0.01 }}
        >
          <Image
            source={require("../../../assets/Icons/news-letter.png")}
            style={{ height: screenHeight * 0.1, width: screenHeight * 0.1 }}
          />
          <Text
            style={{
              color: Colors.primary,
              fontFamily: "Poppins-Bold",
              fontSize: screenHeight * 0.03,
            }}
          >
            Subscribe
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: Colors.primary,
              fontFamily: fontFamily,
              width: dimensionSetter({
                mobile: screenWidth * 0.7,
                tabPort: screenWidth * 0.5,
                tabLand: screenWidth * 0.2,
              }),
              fontSize: screenHeight * 0.02,
            }}
          >
            Get our newsletter and never miss out on a thing
          </Text>
        </View>
        <View
          style={[
            {
              zIndex: 3,
              width: dimensionSetter({
                mobile: "80%",
                tabPort: "60%",
                tabLand: "30%",
              }),
            },
          ]}
        >
          <Text
            style={{
              color: Colors.primary,
              fontFamily: "Poppins-Bold",
              fontSize: screenHeight * 0.02,
            }}
          >
            Cell-Phone Number
          </Text>
          <View style={[styles.inputField, { height: screenHeight * 0.06 }]}>
            <PhoneIcon
              height={dimensionSetter({
                mobile: screenHeight * 0.05,
                tabPort: screenHeight * 0.03,
                tabLand: screenHeight * 0.03,
              })}
              width={dimensionSetter({
                mobile: screenWidth * 0.05,
                tabPort: screenWidth * 0.03,
                tabLand: screenWidth * 0.03,
              })}
              style={{
                marginHorizontal: dimensionSetter({
                  mobile: screenWidth * 0.05,
                  tabPort: screenWidth * 0.03,
                  tabLand: screenWidth * 0.01,
                }),
              }}
            />
            <TextInput
              style={textInputStyle()}
              placeholder="+63 9 Number"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
            />
          </View>
        </View>
        <FlatButton
          title="Subscribe Now"
          onPressed={() => {}}
          zIndex={2}
          width={dimensionSetter({
            mobile: screenWidth * 0.8,
            tabPort: screenWidth * 0.6,
            tabLand: screenWidth * 0.3,
          })}
        />
        <View
          style={[
            styles.twoPersons,
            {
              bottom: dimensionSetter({
                mobile: screenHeight * 0.03,
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
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
    textAlignVertical: "center",
    borderColor: Colors.secondary,
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "#c7c6c5",
    justifyContent: "center",
    textAlignVertical: "center",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.3,
    position: "absolute",
  },
});
