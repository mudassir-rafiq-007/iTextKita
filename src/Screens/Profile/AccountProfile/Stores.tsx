import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

export default function Stores() {
  const {isTabLandscape, fontFamily, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const [showStores, setShowStores] = useState<boolean>(true);

  const stores = [
    { id: 1, name: "iTextKita" },
    { id: 2, name: "Kit Shop" },
    { id: 3, name: "Ads Tool" },
    { id: 4, name: "Ka-Tubig" },
  ];
  return (
    <View
      style={{
        width: dimensionSetter({
          mobile: "100%",
          tabPort: "80%",
          tabLand: "70%",
        }),
        alignItems: "center",
        gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.01,
      }}
    >
      <TouchableOpacity
        onPress={() => setShowStores(!showStores)}
        style={[styles.showStoresButton, { height: screenHeight * 0.06 }]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: screenWidth * 0.05,
          }}
        >
          <MCIcons
            color={"#0005"}
            name="store-outline"
            size={screenHeight * 0.04}
          />
          <Text
            style={{
              color: "#0005",
              fontFamily: fontFamily,
              fontSize: screenHeight * 0.02,
            }}
          >
            Store Details
          </Text>
        </View>
        <SimpleLineIcons
          color={"#0005"}
          size={screenHeight * 0.03}
          name={showStores ? "arrow-up" : "arrow-down"}
        />
      </TouchableOpacity>
      {showStores && (
        <View
          style={{
            zIndex: 2,
            width: "90%",
            height: screenHeight * 0.25,
          }}
        >
          <FlatList
            data={stores}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  flexDirection: "row",
                  backgroundColor: "#DeDeDe",
                  paddingLeft: screenWidth * 0.05,
                  borderRadius: screenHeight * 0.01,
                  marginVertical: screenHeight * 0.005,
                  paddingVertical: screenHeight * 0.005,
                }}
              >
                <Text
                  style={{
                    color: "#0008",
                    fontFamily: fontFamily,
                    fontSize: screenHeight * 0.02,
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
