import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useContext, useState } from "react";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Colors } from "../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

interface propsType {
  navigate: (screen: string, {}: object) => void;
}

export default function Stores(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [showStores, setShowStores] = useState<boolean>(true);

  const stores = [
    { id: 1, name: "iTextKita" },
    { id: 2, name: "Kit Shop" },
    { id: 3, name: "Ads Tool" },
    { id: 4, name: "Ka-Tubig" },
    { id: 5, name: "iTextKita" },
    { id: 6, name: "Kit Shop" },
    { id: 7, name: "Ads Tool" },
    { id: 8, name: "Ka-Tubig" },
  ];
  return (
    <View
      style={{
        alignItems: "center",
        gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.01,
        width: dimensionSetter({
          mobile: "100%",
          tabPort: "80%",
          tabLand: "100%",
        }),
      }}
    >
      <TouchableOpacity
        onPress={() => setShowStores(!showStores)}
        style={[
          styles.showStoresButton,
          {
            height: screenHeight * 0.06,
            borderTopWidth: isTabLandscape ? null : 1,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: isTabLandscape ? screenWidth * 0.01 : screenWidth * 0.05,
          }}
        >
          <MCIcons
            color={"#0005"}
            name="store-outline"
            size={isTabLandscape ? screenHeight * 0.06 : screenHeight * 0.04}
          />
          <Text
            style={{
              color: Colors.primary,
              fontFamily: isTabLandscape ? fontBold : fontRegular,
              fontSize: isTabLandscape
                ? screenHeight * 0.03
                : screenHeight * 0.02,
            }}
          >
            Store Details
          </Text>
        </View>
        <SimpleLineIcons
          color={"#000"}
          size={screenHeight * 0.03}
          name={showStores ? "arrow-up" : "arrow-down"}
        />
      </TouchableOpacity>
      {showStores && (
        <View
          style={{
            zIndex: 2,
            width: "90%",
            height: isTabLandscape ? screenHeight * 0.35 : screenHeight * 0.25,
          }}
        >
          <FlatList
            data={stores}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigate("Store Information", { storeName: item.name })
                }
                style={{
                  flexDirection: "row",
                  backgroundColor: "#F7F7F7",
                  borderRadius: screenHeight * 0.01,
                  marginVertical: screenHeight * 0.005,
                  paddingVertical: screenHeight * 0.005,
                  paddingLeft: isTabLandscape
                    ? screenWidth * 0.03
                    : screenWidth * 0.05,
                }}
              >
                <Text
                  style={{
                    color: Colors.primary,
                    fontFamily: fontRegular,
                    fontSize: isTabLandscape
                      ? screenHeight * 0.025
                      : screenHeight * 0.02,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  showStoresButton: {
    width: "90%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#0002",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
