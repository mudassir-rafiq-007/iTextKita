import { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CampaignDetail from "./CampaignDetail";
import { Colors } from "../../Components/Constants/Colors";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import GradientView from "../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    setOptions: ({}: object) => void;
    navigate: (screen: string) => void;
  };
};

export default function MarketingHistory(props: propsType) {
  const { screenHeight, screenWidth, fontRegular, fontBold, dimensionSetter } =
    useContext(DimensionsContext);

  const dummyMsg =
    "Hello David,\nWe are launching our new product called “Isaw ng Manok” and we would like to invited you to join us in our launching day with free entrance!\nSee out poster @\nhttps://testing.com/page";

  const campaignsData = [
    {
      title: "Campaign 1",
      details: [
        { key: "Date", value: "05-Oct-2023" },
        { key: "Customer Count", value: 80 },
        { key: "Sent By", value: "Ryan" },
        { key: "Status", value: "On-Going" },
        { key: "Execution Type", value: "Online" },
        { key: "Message", value: dummyMsg },
      ],
    },
    {
      title: "Campaign 2",
      details: [
        { key: "Date", value: "05-Oct-2023" },
        { key: "Customer Count", value: 80 },
        { key: "Sent By", value: "Ryan" },
        { key: "Status", value: "On-Going" },
        { key: "Execution Type", value: "Online" },
        { key: "Message", value: dummyMsg },
      ],
    },
    {
      title: "Campaign 3",
      details: [
        { key: "Date", value: "05-Oct-2023" },
        { key: "Customer Count", value: 80 },
        { key: "Sent By", value: "Ryan" },
        { key: "Status", value: "On-Going" },
        { key: "Execution Type", value: "Online" },
        { key: "Message", value: dummyMsg },
      ],
    },
  ];

  return (
    <GradientView style={[styles.container, { gap: screenHeight * 0.02 }]}>
      <FlatList
        data={campaignsData}
        style={{ zIndex: 2, width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.topListView,
              {
                width: dimensionSetter({
                  mobile: screenWidth * 0.9,
                  tabPort: screenWidth * 0.8,
                  tabLand: screenWidth * 0.6,
                }),
                borderRadius: screenHeight * 0.01,
                marginVertical: screenHeight * 0.01,
              },
            ]}
          >
            <View
              style={[
                styles.keyListView,
                {
                  width: "90%",
                  paddingVertical: screenHeight * 0.03,
                },
              ]}
            >
              <FlatList
                data={item.details}
                renderItem={({ item }) => <CampaignDetail item={item} />}
              />
            </View>
          </View>
        )}
      />
      <TwoPersons style={styles.twoPersons} />
    </GradientView>
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
