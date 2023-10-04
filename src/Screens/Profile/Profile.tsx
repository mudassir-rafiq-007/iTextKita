import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import FAIcons from "react-native-vector-icons/FontAwesome";
import NewUserModal from "./NewUser";
import NewStoreModal from "./NewStore";
import BuyCreditModal from "./BuyCredit";
import TwoPersons from "../../../assets/bgt.svg";
import Header from "../../Components/Header/Header";
import { Colors } from "../../Components/Constants/Colors";
import { shadow } from "../../Components/Constants/Shadow";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Profile(props: propsType) {
  const {
    screenWidth,
    screenHeight,
    isTabPortrait,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [showNewUserModal, setShowNewUserModal] = useState<boolean>(false);
  const [showNewStoreModal, setShowNewStoreModal] = useState<boolean>(false);
  const [showBuyCreditModal, setShowBuyCreditModal] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const stores = ["Apple Store", "Matries", "Newman"];

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="PROFILE" />,
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
          justifyContent: dimensionSetter({
            mobile: "flex-start",
            tabPort: "center",
            tabLand: "flex-start",
          }),
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: dimensionSetter({
            mobile: "95%",
            tabPort: "75%",
            tabLand: "70%",
          }),
          justifyContent: dimensionSetter({
            mobile: "space-evenly",
            tabPort: "space-evenly",
            tabLand: "center",
          }),
        }}
      >
        <View
          style={[
            styles.tileView,
            {
              height: screenHeight * 0.06,
              width: dimensionSetter({
                mobile: "70%",
                tabPort: "70%",
                tabLand: "50%",
              }),
              marginHorizontal: dimensionSetter({
                mobile: null,
                tabPort: null,
                tabLand: screenWidth * 0.02,
              }),
            },
          ]}
        >
          <Text
            style={[
              styles.tileText,
              {
                marginTop:
                  Platform.OS == "android" ? screenHeight * 0.005 : null,
                fontSize: dimensionSetter({
                  mobile: screenHeight * 0.02,
                  tabPort: screenHeight * 0.02,
                  tabLand: screenHeight * 0.025,
                }),
              },
            ]}
          >
            Available Credits: 2122.00
          </Text>
        </View>
        <FlatButton
          title="BUY"
          titleColor="black"
          bgColor="#fae31f"
          onPressed={() => setShowBuyCreditModal(true)}
          titleFontSize={dimensionSetter({
            mobile: screenHeight * 0.02,
            tabPort: screenHeight * 0.02,
            tabLand: screenHeight * 0.03,
          })}
          paddingHorizontal={dimensionSetter({
            mobile: screenWidth * 0.03,
            tabPort: screenWidth * 0.03,
            tabLand: screenWidth * 0.01,
          })}
        />
      </View>
      <View
        style={[
          styles.addButtons,
          {
            width: dimensionSetter({
              mobile: screenWidth,
              tabPort: screenWidth * 0.7,
              tabLand: screenWidth * 0.3,
            }),
          },
        ]}
      >
        <FlatButton
          title="Add New User"
          onPressed={() => setShowNewUserModal(true)}
          paddingHorizontal={dimensionSetter({
            mobile: screenWidth * 0.05,
            tabPort: screenWidth * 0.04,
            tabLand: screenWidth * 0.02,
          })}
        />
        <FlatButton
          title="Add New Store"
          onPressed={() => setShowNewStoreModal(true)}
          paddingHorizontal={dimensionSetter({
            mobile: screenWidth * 0.05,
            tabPort: screenWidth * 0.04,
            tabLand: screenWidth * 0.02,
          })}
        />
      </View>
      <NewUserModal
        modalVisible={showNewUserModal}
        setShowModal={setShowNewUserModal}
      />
      <NewStoreModal
        modalVisible={showNewStoreModal}
        setShowModal={setShowNewStoreModal}
      />
      <BuyCreditModal
        modalVisible={showBuyCreditModal}
        setShowModal={setShowBuyCreditModal}
      />
      <View
        style={[
          styles.tileView,
          {
            height: screenHeight * 0.06,
            width: dimensionSetter({
              mobile: "90%",
              tabPort: "70%",
              tabLand: "35%",
            }),
          },
        ]}
      >
        <Text
          style={[
            styles.tileText,
            {
              fontSize: screenHeight * 0.025,
              marginTop: Platform.OS == "android" ? screenHeight * 0.005 : null,
            },
          ]}
        >
          Store Names
        </Text>
      </View>
      <View
        style={{
          zIndex: 2,
          borderWidth: 1,
          borderColor: "black",
          width: dimensionSetter({
            mobile: screenWidth * 0.9,
            tabPort: screenWidth * 0.7,
            tabLand: screenWidth * 0.5,
          }),
          height: dimensionSetter({
            mobile: screenHeight * 0.4,
            tabPort: screenHeight * 0.4,
            tabLand: screenHeight * 0.3,
          }),
        }}
      >
        <FlatList
          scrollEnabled
          data={stores}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.listItem,
                {
                  height: screenHeight * 0.06,
                  marginVertical: screenHeight * 0.001,
                  marginHorizontal: screenWidth * 0.01,
                  paddingHorizontal: screenWidth * 0.05,
                },
              ]}
            >
              <FAIcons name="circle" size={screenHeight * 0.01} />
              <Text
                style={{
                  color: Colors.primary,
                  fontFamily: "Poppins-Bold",
                  fontSize: screenHeight * 0.02,
                  paddingLeft: screenWidth * 0.03,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <FlatButton
        zIndex={2}
        title="Log Out"
        onPressed={() => {
          props.navigation.navigate("Login");
        }}
      />
      {(isTabLandscape || isTabPortrait) && (
        <Text
          style={[
            styles.nTech,
            {
              zIndex: 2,
              marginVertical: screenHeight * 0.01,
              fontSize: dimensionSetter({
                mobile: screenWidth * 0.04,
                tabPort: screenWidth * 0.025,
                tabLand: screenWidth * 0.015,
              }),
            },
          ]}
        >
          ⓒ & 2023 NTech Crop.
        </Text>
      )}
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
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  tileView: {
    ...shadow,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#084A5B",
  },
  tileText: {
    zIndex: 2,
    color: "white",
    textAlignVertical: "center",
    fontFamily: "Poppins-Regular",
  },
  addButtons: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  listItem: {
    ...shadow,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCF3F3",
  },
  nTech: {
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
