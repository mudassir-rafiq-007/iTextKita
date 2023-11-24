import { useContext } from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Subscribe from "./Subscribe";
import InputFields from "./InputFields";
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
  const { fontBold, fontRegular, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  return (
    <GradientView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
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
          <FlatButton title="Subscribe Now" onPressed={() => {}} zIndex={2} />
          <TwoPersons style={styles.twoPersons} />
        </ScrollView>
      </KeyboardAvoidingView>
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
