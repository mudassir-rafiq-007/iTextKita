import { useEffect, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Dropdown from "./Dropdown";
import Header from "../../Components/Header/Header";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../../assets/images/two-persons.svg";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    setOptions: ({}: object) => void;
    navigate: (screen: string) => void;
  };
};

export default function Templates(props: propsType) {
  const { screenHeight, screenWidth, dimensionSetter } =
    useContext(DimensionsContext);

  const campaignsData = [
    {
      name: "Buy 1 Take 1",
      data: [
        { key: "Start Date", value: new Date().toDateString() },
        { key: "End Date", value: new Date().toDateString() },
        { key: "Status", value: "Active" },
        { key: "Customers Engaged", value: 40 },
        { key: "Short Link", value: "ntlnk.6952.39" },
      ],
    },
    {
      name: "50% off for new customers",
      data: [
        { key: "Start Date", value: new Date().toDateString() },
        { key: "End Date", value: new Date().toDateString() },
        { key: "Status", value: "Active" },
        { key: "Customers Engaged", value: 50 },
        { key: "Short Link", value: "ntlnk.0785.52" },
      ],
    },
    {
      name: "FREE Popcorns for successful referral",
      data: [
        { key: "Start Date", value: new Date().toDateString() },
        { key: "End Date", value: new Date().toDateString() },
        { key: "Status", value: "Active" },
        { key: "Customers Engaged", value: 60 },
        { key: "Short Link", value: "ntlnk.0192.32" },
      ],
    },
  ];

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="CAMPAIGN MATERIALS" />,
    });
  }, []);

  return (
    <LinearGradient
      locations={[0.4, 1]}
      colors={["#FFFFFF", "#008080"]}
      style={[
        styles.container,
        {
          gap: screenHeight * 0.03,
          paddingTop: screenHeight * 0.01,
        },
      ]}
    >
      <View
        style={{
          zIndex: 2,
          height: screenHeight * 0.6,
          width: dimensionSetter({
            mobile: screenWidth * 0.9,
            tabPort: screenWidth * 0.7,
            tabLand: screenWidth * 0.4,
          }),
        }}
      >
        <FlatList
          data={campaignsData}
          renderItem={({ item }) => (
            <Dropdown name={item.name} data={item.data} />
          )}
        />
      </View>
      <FlatButton
        title="New Template"
        onPressed={() => props.navigation.navigate("Online Marketing")}
        zIndex={2}
      />
      <View
        style={[
          styles.twoPersons,
          {
            opacity: dimensionSetter({
              mobile: 0.5,
              tabPort: 0.5,
              tabLand: 0.1,
            }),
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
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: "2%",
    borderBottomColor: "#0002",
    justifyContent: "space-between",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
