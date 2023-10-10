import { useEffect, useContext } from "react";
import { View, FlatList, Platform, StyleSheet, TextInput } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Folder from "../../../assets/images/folder.svg";
import TwoPersons from "../../../assets/images/two-persons.svg";
import Header from "../../Components/Header/Header";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function OnlineMarketing(props: propsType) {
  const { screenHeight, screenWidth, dimensionSetter } =
    useContext(DimensionsContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const data = [
    { key: 1, value: "Add Poster Upto 3MB" },
    { key: 2, value: "Youtube Link" },
    { key: 3, value: "Days Available Online" },
    { key: 4, value: "Facebook Page ID" },
    { key: 5, value: "Instagram Page ID" },
    { key: 6, value: "Messenger Page ID" },
    { key: 7, value: "Status" },
    { key: 8, value: "Expiration Date" },
    { key: 9, value: "URL" },
  ];

  function inputFieldStyle() {
    return [
      styles.inputField,
      {
        height: screenHeight * 0.06,
        marginVertical: screenHeight * 0.002,
        paddingHorizontal: screenWidth * 0.03,
      },
    ];
  }

  function inputTextStyle() {
    return [
      styles.textInput,
      {
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.02,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
        marginTop:
          Platform.OS == "android"
            ? dimensionSetter({
                mobile: screenHeight * 0.005,
                tabPort: screenHeight * 0.01,
                tabLand: screenHeight * 0.01,
              })
            : null,
      },
    ];
  }

  function FolderIcon() {
    return (
      <Folder
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
      />
    );
  }
  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="ONLINE MARKETING" />,
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      locations={[0.5, 1]}
      style={styles.container}
      colors={["#FFFFFF", "#008080"]}
    >
      <View
        style={[
          styles.form,
          {
            paddingTop: screenHeight * 0.01,
            height: dimensionSetter({
              mobile: screenHeight * 0.6,
              tabPort: screenHeight * 0.6,
              tabLand: screenHeight * 0.5,
            }),
            width: dimensionSetter({
              mobile: screenWidth * 0.95,
              tabPort: screenWidth * 0.62,
              tabLand: screenWidth * 0.42,
            }),
          },
        ]}
      >
        <FlatList
          data={data}
          scrollEnabled
          contentContainerStyle={{
            width: dimensionSetter({
              mobile: screenWidth * 0.9,
              tabPort: screenWidth * 0.6,
              tabLand: screenWidth * 0.4,
            }),
          }}
          renderItem={({ item }) => (
            <View style={inputFieldStyle()}>
              <TextInput
                style={inputTextStyle()}
                placeholder={item.value}
                textAlignVertical="center"
                placeholderTextColor={"#c7c6c5"}
                onChangeText={(text) => {}}
              />
              {item.key == 1 && <FolderIcon />}
            </View>
          )}
        />
      </View>
      <FlatButton
        title="Save"
        zIndex={2}
        onPressed={() => props.navigation.navigate("Templates")}
        titleFontSize={dimensionSetter({
          mobile: screenWidth * 0.05,
          tabPort: screenWidth * 0.035,
          tabLand: screenWidth * 0.015,
        })}
        paddingHorizontal={dimensionSetter({
          mobile: screenWidth * 0.08,
          tabPort: screenWidth * 0.035,
          tabLand: screenWidth * 0.03,
        })}
        marginVertical={dimensionSetter({
          mobile: screenHeight * 0.015,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.03,
        })}
      />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  form: {
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputField: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#084A5B",
  },
  textInput: {
    flex: 1,
    opacity: 0.5,
    width: "100%",
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  twoPersons: {
    zIndex: 1,
    position: "absolute",
  },
});
