import { useEffect, useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Subscribe from "./Subscribe";
import InputFields from "./InputFields";
import Header from "../../Components/Header/Header";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import GradientView from "../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    setOptions: ({}: object) => void;
    navigate: (screen: string) => void;
  };
};

export default function BusinessName(props: propsType) {
  const { fontFamily, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="Ka-Tubig" />,
    });
  }, []);

  return (
    <GradientView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ height: screenHeight }}
        contentContainerStyle={{
          flexGrow: 1,
          width: screenWidth,
          alignItems: "center",
          gap: screenHeight * 0.05,
        }}
      >
        <Subscribe />
        <InputFields />
        <View style={{ alignItems: "flex-end" }}>
          <FlatButton title="Subscribe Now" onPressed={() => {}} zIndex={2} />
        </View>
        <TwoPersons style={styles.twoPersons} />
      </ScrollView>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "5%",
    borderTopWidth: 1,
    borderColor: "#0003",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
