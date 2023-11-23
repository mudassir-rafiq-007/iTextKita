import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

export default function PurchaseHistory() {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const history = [
    { id: 1, date: "12/01/23", plan: "Basic (29.99$)", status: "Active" },
    { id: 2, date: "12/01/23", plan: "Basic (29.99$)", status: "Active" },
    { id: 3, date: "12/01/23", plan: "Basic (29.99$)", status: "Active" },
    { id: 4, date: "12/01/23", plan: "Basic (29.99$)", status: "Expired" },
    { id: 5, date: "12/01/23", plan: "Basic (29.99$)", status: "Expired" },
    { id: 6, date: "12/01/23", plan: "Basic (29.99$)", status: "Active" },
    { id: 7, date: "12/01/23", plan: "Basic (29.99$)", status: "Active" },
    { id: 8, date: "12/01/23", plan: "Basic (29.99$)", status: "Active" },
    { id: 9, date: "12/01/23", plan: "Basic (29.99$)", status: "Expired" },
    { id: 10, date: "12/01/23", plan: "Basic (29.99$)", status: "Expired" },
  ];

  const headerTextStyle = {
    color: Colors.primary,
    fontSize: screenHeight * 0.02,
    fontFamily: isTabLandscape ? "Poppins-Bold" : fontFamily,
  };

  const listHeader = (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: screenHeight * 0.005,
        paddingVertical: screenHeight * 0.005,
      }}
    >
      <Text style={headerTextStyle}>Date</Text>
      <Text style={headerTextStyle}>Plan</Text>
      <Text style={headerTextStyle}>Status</Text>
    </View>
  );

  return (
    <View
      style={{
        zIndex: 2,
        alignItems: "center",
        width: dimensionSetter({
          mobile: "100%",
          tabPort: "80%",
          tabLand: "45%",
        }),
      }}
    >
      <View
        style={{
          width: "90%",
          borderBottomWidth: 1,
          borderColor: "#0002",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: screenHeight * 0.01,
          gap: isTabLandscape ? screenWidth * 0.01 : screenWidth * 0.02,
        }}
      >
        <MaterialIcons
          color={"#0007"}
          name="rotate-left"
          size={isTabLandscape ? screenHeight * 0.05 : screenHeight * 0.03}
        />
        <Text
          style={{
            color: Colors.primary,
            fontFamily: "Poppins-Bold",
            fontSize: isTabLandscape
              ? screenHeight * 0.03
              : screenHeight * 0.02,
          }}
        >
          Purchase History
        </Text>
      </View>
      <View
        style={{
          zIndex: 2,
          width: "90%",
          marginTop: screenHeight * 0.01,
          height: isTabLandscape ? screenHeight * 0.5 : screenHeight * 0.4,
        }}
      >
        <FlatList
          data={history}
          ListHeaderComponent={listHeader}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f7f7f7",
                justifyContent: "space-around",
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
                {item.date}
              </Text>
              <Text
                style={{
                  color: "#0008",
                  fontFamily: fontFamily,
                  fontSize: screenHeight * 0.02,
                }}
              >
                {item.plan}
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily,
                  fontSize: screenHeight * 0.02,
                  color: item.status == "Active" ? "#0484FF" : Colors.secondary,
                }}
              >
                {item.status}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
