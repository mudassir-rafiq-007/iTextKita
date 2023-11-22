import { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FAIcons from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

export default function UsersList() {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const stores = [
    { id: 1, name: "John Wick", status: "Active" },
    { id: 2, name: "Mark Laviste", status: "Active" },
    { id: 3, name: "Lisa Morgan", status: "Active" },
    { id: 4, name: "Danilo Cane", status: "Active" },
    { id: 5, name: "John Wick", status: "Active" },
    { id: 6, name: "Mark Laviste", status: "Active" },
    { id: 7, name: "Lisa Morgan", status: "Active" },
    { id: 8, name: "Danilo Cane", status: "Active" },
  ];
  return (
    <View
      style={{
        alignItems: "center",
        gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.01,
        width: dimensionSetter({
          mobile: "100%",
          tabPort: "80%",
          tabLand: "90%",
        }),
      }}
    >
      <View
        style={[
          { height: screenHeight * 0.06, width: "100%", alignItems: "center" },
        ]}
      >
        <View
          style={[
            styles.titleView,
            {
              paddingBottom: screenHeight * 0.01,
              gap: isTabLandscape ? screenWidth * 0.01 : screenWidth * 0.03,
            },
          ]}
        >
          <FAIcons
            name="users"
            color={Colors.primary}
            size={isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02}
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
            User List
          </Text>
        </View>
      </View>
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
              onPress={() => {}}
              style={{
                flexDirection: "row",
                backgroundColor: "#F7F7F7",
                justifyContent: "space-between",
                borderRadius: screenHeight * 0.01,
                marginVertical: screenHeight * 0.005,
                paddingVertical: screenHeight * 0.005,
                paddingHorizontal: isTabLandscape
                  ? screenWidth * 0.02
                  : screenWidth * 0.05,
              }}
            >
              <Text
                style={{
                  color: "#0008",
                  fontFamily: fontFamily,
                  fontSize: isTabLandscape
                    ? screenHeight * 0.025
                    : screenHeight * 0.02,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: Colors.active,
                  fontFamily: fontFamily,
                  fontSize: screenHeight * 0.02,
                }}
              >
                ({item.status})
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#0002",
    flexDirection: "row",
    alignItems: "center",
  },
});
