import { useContext } from "react";
import { View, Text, FlatList } from "react-native";
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
    { id: 1, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 2, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 3, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 4, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 5, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 6, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 7, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 8, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 9, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 10, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 11, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
    { id: 12, date: "12/01/23", creditAmount: "1000", cost: "4.99$" },
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
        paddingHorizontal: "5%",
        justifyContent: "space-between",
        marginVertical: screenHeight * 0.005,
        paddingVertical: screenHeight * 0.005,
      }}
    >
      <Text style={headerTextStyle}>Date</Text>
      <Text style={headerTextStyle}>Credit Amount</Text>
      <Text style={headerTextStyle}>Cost</Text>
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
          tabLand: "55%",
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
          height: isTabLandscape ? screenHeight * 0.5 : screenHeight * 0.35,
        }}
      >
        <FlatList
          data={history}
          ListHeaderComponent={listHeader}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: "5%",
                backgroundColor: "#f7f7f7",
                justifyContent: "space-between",
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
                {item.creditAmount}
              </Text>
              <Text
                style={{
                  color: Colors.active,
                  fontFamily: fontFamily,
                  fontSize: screenHeight * 0.02,
                }}
              >
                {item.cost}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
