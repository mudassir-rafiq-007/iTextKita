import { useEffect, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import Header from "../../Components/Header/Header";
import { Colors } from "../../Components/Constants/Colors";
import SuccessIcon from "../../../assets/check.svg";
import CrossIcon from "../../../assets/cross.svg";
import TwoPersons from "../../../assets/two-persons.svg";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { LinearGradient } from "expo-linear-gradient";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function MarketingHistory(props: propsType) {
  const { screenHeight, screenWidth, dimensionSetter } =
    useContext(DimensionsContext);

  function Cross() {
    return (
      <CrossIcon height={screenHeight * 0.03} width={screenWidth * 0.03} />
    );
  }

  function Success() {
    return (
      <SuccessIcon height={screenHeight * 0.03} width={screenWidth * 0.03} />
    );
  }

  const campaignsData = [
    {
      title: "Campaign 1",
      details: [
        { key: "Date", value: "05-Oct-2023" },
        { key: "Title", value: "This product is working" },
        { key: "Message", value: "Product Pricing" },
        { key: "Poster", value: "Image" },
        { key: "User", value: "David H." },
        { key: "Success", value: Success() },
        { key: "Failed", value: Cross() },
        { key: "Execution Type", value: "Online" },
      ],
    },
    {
      title: "Campaign 2",
      details: [
        { key: "Date", value: "06-Oct-2023" },
        { key: "Title", value: "Market Campaign" },
        { key: "Message", value: "Total Cost" },
        { key: "Poster", value: "Image" },
        { key: "User", value: "George" },
        { key: "Success", value: Success() },
        { key: "Failed", value: Cross() },
        { key: "Execution Type", value: "Online" },
      ],
    },
    {
      title: "Campaign 3",
      details: [
        { key: "Date", value: "07-Oct-2023" },
        { key: "Title", value: "This product is working" },
        { key: "Message", value: "Product Review" },
        { key: "Poster", value: "Image" },
        { key: "User", value: "Newman" },
        { key: "Success", value: Success() },
        { key: "Failed", value: Cross() },
        { key: "Execution Type", value: "Online" },
      ],
    },
  ];

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="MARKETING HISTORY" />,
    });
  }, []);

  return (
    <LinearGradient
      locations={[0.4, 1]}
      colors={["#FFFFFF", "#008080"]}
      style={[styles.container, { gap: screenHeight * 0.02 }]}
    >
      <FlatList
        data={campaignsData}
        style={{ zIndex: 2 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.topListView,
              {
                width: dimensionSetter({
                  mobile: screenWidth * 0.9,
                  tabPort: screenWidth * 0.8,
                  tabLand: screenWidth * 0.5,
                }),
                height: screenHeight * 0.3,
                marginVertical: screenHeight * 0.01,
              },
            ]}
          >
            <View
              style={[
                styles.keyListView,
                {
                  width: "35%",
                  height: "90%",
                },
              ]}
            >
              <FlatList
                data={item.details}
                renderItem={({ item }) => (
                  <Text
                    style={{ color: "white", fontSize: screenHeight * 0.02 }}
                  >{`${item.key}:`}</Text>
                )}
              />
            </View>
            <View
              style={[
                styles.valueListView,
                {
                  alignItems: "center",
                  width: "50%",
                  height: "90%",
                },
              ]}
            >
              <FlatList
                data={item.details}
                renderItem={({ item }) => {
                  if (item.key == "Success" || item.key == "Failed") {
                    return (
                      <View style={{ alignItems: "center" }}>
                        {item.value as JSX.Element}
                      </View>
                    );
                  } else {
                    return (
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontSize: screenHeight * 0.02,
                        }}
                      >
                        {item.value}
                      </Text>
                    );
                  }
                }}
              />
            </View>
          </View>
        )}
      />

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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  placeholder: {
    opacity: 0.5,
    color: "black",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
  topListView: {
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-evenly",
    backgroundColor: Colors.primary,
  },
  keyListView: {
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  valueListView: {
    backgroundColor: "#FFF9",
    borderTopLeftRadius: 20,
    justifyContent: "center",
    borderBottomRightRadius: 20,
  },
});