import {
  View,
  Text,
  TextStyle,
  TextInput,
  Platform,
  StyleSheet,
  StyleProp,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import InputFields from "./InputFields";
import GradientView from "../../Components/GradientView/GradientView";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";

type propsType = {
  navigation: {
    setOptions: ({}: object) => void;
    navigate: (screen: string) => void;
  };
};

const inputsData = [
  { title: "Campaign Name", placeholder: "My First Campaign" },
  { title: "Poster", placeholder: "No File Upload" },
  { title: "Youtube ID", placeholder: "Link" },
  { title: "Facebook ID", placeholder: "Link" },
  { title: "Duration", placeholder: "7 Days" },
];

export default function CreateCampaign(props: propsType) {
  const { fontFamily, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="CREATE CAMPAIGN" />,
    });
  }, []);
  return (
    <GradientView style={styles.main}>
      <ScrollView
        style={{ height: screenHeight }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          gap: screenHeight * 0.05,
        }}
      >
        <View
          style={{
            zIndex: 2,
            width: screenWidth,
            gap: screenHeight * 0.015,
          }}
        >
          {inputsData.map((item) => (
            <InputFields key={item.title} item={item} />
          ))}
        </View>
        <FlatButton zIndex={2} title="Create" onPressed={() => {}} />
        <TwoPersons style={styles.twoPersons} />
      </ScrollView>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: "4%",
    borderTopWidth: 1,
    borderColor: "#0003",
    backgroundColor: "white",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
