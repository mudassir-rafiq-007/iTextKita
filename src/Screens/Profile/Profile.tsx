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
import TwoPersons from "../../../assets/images/bgt.svg";
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

interface selcted {
  key: number;
  store: string;
  isSelected: boolean;
}

export default function Profile(props: propsType) {
  const {
    fontFamily,
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
  });

  const [stores, setStores] = useState<selcted[]>([
    { key: 1, store: "Apple", isSelected: false },
    { key: 2, store: "Gourmet", isSelected: false },
    { key: 3, store: "Cheezious", isSelected: false },
    { key: 4, store: "Calvin Klein", isSelected: false },
    { key: 5, store: "MR Tech", isSelected: false },
  ]);

  function onSelect(selectedStore: selcted) {
    const tempData: selcted[] = [];
    if (stores.length) {
      stores.map((store) => {
        if (store.key == selectedStore.key) {
          if (store.isSelected) {
            store.isSelected = false;
            tempData.push(store);
          } else {
            store.isSelected = true;
            tempData.push(store);
          }
        } else {
          store.isSelected = false;
          tempData.push(store);
        }
      });
      setStores(tempData);
    }
  }

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
          gap: dimensionSetter({
            mobile: screenHeight * 0.03,
            tabPort: screenHeight * 0.01,
            tabLand: screenHeight * 0.01,
          }),
          paddingTop: screenHeight * 0.01,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: dimensionSetter({
            mobile: screenWidth * 0.9,
            tabPort: screenWidth * 0.7,
            tabLand: screenWidth * 0.6,
          }),
          justifyContent: dimensionSetter({
            mobile: "space-between",
            tabPort: "space-between",
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
                fontFamily: fontFamily,
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
          width={dimensionSetter({
            mobile: screenWidth * 0.2,
            tabPort: screenWidth * 0.15,
            tabLand: screenWidth * 0.1,
          })}
        />
      </View>
      <View
        style={[
          styles.addButtons,
          {
            width: dimensionSetter({
              mobile: screenWidth * 0.9,
              tabPort: screenWidth * 0.7,
              tabLand: screenWidth * 0.3,
            }),
          },
        ]}
      >
        <FlatButton
          title="Add New User"
          onPressed={() => setShowNewUserModal(true)}
          width={dimensionSetter({
            mobile: screenWidth * 0.4,
            tabPort: screenWidth * 0.3,
            tabLand: screenWidth * 0.15,
          })}
        />
        <FlatButton
          title="Add New Store"
          onPressed={() => setShowNewStoreModal(true)}
          width={dimensionSetter({
            mobile: screenWidth * 0.4,
            tabPort: screenWidth * 0.3,
            tabLand: screenWidth * 0.15,
          })}
        />
      </View>
      <NewUserModal
        fontFamily={fontFamily}
        modalVisible={showNewUserModal}
        setShowModal={setShowNewUserModal}
      />
      <NewStoreModal
        fontFamily={fontFamily}
        modalVisible={showNewStoreModal}
        setShowModal={setShowNewStoreModal}
      />
      <BuyCreditModal
        fontFamily={fontFamily}
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
              fontFamily: fontFamily,
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
          width: dimensionSetter({
            mobile: screenWidth * 0.9,
            tabPort: screenWidth * 0.7,
            tabLand: screenWidth * 0.5,
          }),
          height: dimensionSetter({
            mobile: screenHeight * 0.3,
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
              onPress={() => onSelect(item)}
              style={[
                styles.listItem,
                {
                  height: screenHeight * 0.06,
                  marginVertical: screenHeight * 0.001,
                  marginHorizontal: screenWidth * 0.01,
                  paddingHorizontal: screenWidth * 0.05,
                  backgroundColor: item.isSelected ? Colors.primary : "white",
                },
              ]}
            >
              <FAIcons name="circle" size={screenHeight * 0.01} />
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: screenHeight * 0.02,
                  paddingLeft: screenWidth * 0.03,
                  color: item.isSelected ? "white" : Colors.primary,
                }}
              >
                {item.store}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <FlatButton
        title="Apply"
        zIndex={2}
        onPressed={() => props.navigation.navigate("Campaign")}
        width={dimensionSetter({
          mobile: screenWidth * 0.8,
          tabPort: screenWidth * 0.6,
          tabLand: screenWidth * 0.2,
        })}
      />
      <FlatButton
        zIndex={2}
        title="Log Out"
        onPressed={() => {
          props.navigation.navigate("Login");
        }}
        width={dimensionSetter({
          mobile: screenWidth * 0.8,
          tabPort: screenWidth * 0.6,
          tabLand: screenWidth * 0.2,
        })}
      />
      {(isTabLandscape || isTabPortrait) && (
        <Text
          style={{
            color: "white",
            fontFamily: fontFamily,
            zIndex: 2,
            marginVertical: screenHeight * 0.01,
            fontSize: dimensionSetter({
              mobile: screenWidth * 0.04,
              tabPort: screenWidth * 0.025,
              tabLand: screenWidth * 0.015,
            }),
          }}
        >
          ⓒ & 2023 NTech Crop.
        </Text>
      )}
      <View
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
  },
  addButtons: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItem: {
    ...shadow,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCF3F3",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
