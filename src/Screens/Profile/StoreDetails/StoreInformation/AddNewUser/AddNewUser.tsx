import { useContext } from "react";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "./InputField";
import { Colors } from "../../../../../Components/Constants/Colors";
import FlatButton from "../../../../../Components/Buttons/FlatButton";
import CustomModal from "../../../../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../../../../Components/Contexts/DimensionsContext";
import Form from "./Form";

interface propsType {
  modalVisible: boolean;
  setShowModal: (value: "next" | "cancel") => void;
}

export default function AddNewUser(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  return (
    <CustomModal
      modalVisible={props.modalVisible}
      screenHeight={screenHeight}
      style={[
        {
          alignItems: "center",
          backgroundColor: Colors.primary,
          borderRadius: screenHeight * 0.03,
          paddingVertical: isTabLandscape ? "3%" : "5%",
          justifyContent: isTabLandscape ? "flex-start" : "center",
          gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
          height: isTabLandscape ? screenHeight * 0.7 : screenHeight * 0.8,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "80%",
            tabLand: "80%",
          }),
        },
      ]}
    >
      <Text
        style={[
          styles.titleText,
          {
            fontFamily: fontBold,
            fontSize: isTabLandscape
              ? screenHeight * 0.04
              : screenHeight * 0.02,
          },
        ]}
      >
        User Account
      </Text>
      {Platform.OS == "android" ? (
        <ScrollView
          nestedScrollEnabled={true}
          style={{
            width: "100%",
            height: isTabLandscape ? screenHeight * 0.7 : screenHeight * 0.8,
          }}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form setShowModal={(value) => props.setShowModal(value)} />
        </ScrollView>
      ) : (
        <Form setShowModal={(value) => props.setShowModal(value)} />
      )}
      <View style={{ position: "absolute", top: "3%", right: "3%" }}>
        <MaterialIcons
          name="cancel"
          color={Colors.secondary}
          size={screenHeight * 0.04}
          onPress={() => props.setShowModal("cancel")}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "#fff",
    textAlign: "center",
  },
});
