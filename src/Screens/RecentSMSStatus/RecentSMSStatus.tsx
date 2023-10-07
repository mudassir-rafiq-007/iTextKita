import { useContext, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Lady from "../../../assets/images/sms.svg";
import TwoPersons from "../../../assets/images/two-persons.svg";
import Header from "../../Components/Header/Header";
import { shadow } from "../../Components/Constants/Shadow";
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

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const customers = ["Jerry", "Matries", "Newman", "Rachel", "Ross", "Jake"];

  function textStyle() {
    return {
      fontFamily: "Poppins-Regular",
      fontSize: screenHeight * 0.02,
      marginTop:
        Platform.OS == "android"
          ? dimensionSetter({
              mobile: screenHeight * 0.005,
              tabPort: screenHeight * 0.01,
              tabLand: screenHeight * 0.01,
            })
          : null,
    };
  }

  function ListHeader() {
    return (
      <View>
        <TouchableOpacity
          style={[styles.tileView, { height: screenHeight * 0.06 }]}
        >
          <Text style={textStyle()}>{customers[0]}</Text>
          <View
            style={[
              styles.icons,
              {
                width: dimensionSetter({
                  mobile: "15%",
                  tabPort: "15%",
                  tabLand: "15%",
                }),
              },
            ]}
          >
            <Image
              source={require("../../../assets/Icons/like.png")}
              style={{
                height: screenHeight * 0.03,
                width: screenHeight * 0.03,
              }}
            />
            <Image
              source={require("../../../assets/Icons/arrowdown.png")}
              style={{
                height: screenHeight * 0.02,
                width: screenHeight * 0.02,
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: screenHeight * 0.01,
          }}
        >
          <Text style={textStyle()}>{new Date().toDateString()}</Text>
          <Text style={textStyle()}>Use messages for web to send SMS, MMS</Text>
        </View>
      </View>
    );
  }

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="RECENT SMS STATUS" />,
    });
  }, []);

  if (!fontsLoaded) return null;
  return (
    <LinearGradient
      locations={[0.4, 1]}
      colors={["#FFFFFF", "#008080"]}
      style={styles.main}
    >
      <Lady height={screenHeight * 0.1} width={screenWidth * 0.5} />
      <View
        style={[
          styles.listView,
          {
            paddingTop: screenHeight * 0.03,
            height: dimensionSetter({
              mobile: "100%",
              tabPort: "70%",
              tabLand: "100%",
            }),
            width: dimensionSetter({
              mobile: "100%",
              tabPort: "80%",
              tabLand: "50%",
            }),
          },
        ]}
      >
        <FlatList
          data={customers}
          ListHeaderComponent={ListHeader()}
          contentContainerStyle={{ gap: screenHeight * 0.005 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.tileView, { height: screenHeight * 0.06 }]}
            >
              <Text style={textStyle()}>{item}</Text>
              <View style={styles.icons}>
                <Image
                  source={require("../../../assets/Icons/like.png")}
                  style={{
                    height: screenHeight * 0.03,
                    width: screenHeight * 0.03,
                  }}
                />
                <Image
                  source={require("../../../assets/Icons/arrowdown.png")}
                  style={{
                    height: screenHeight * 0.02,
                    width: screenHeight * 0.02,
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
      />
    </LinearGradient>
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
    width: "100%",
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
  icons: {
    width: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  twoPersons: {
    zIndex: 1,
    position: "absolute",
  },
});
