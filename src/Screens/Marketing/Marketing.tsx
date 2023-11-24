import {
  Text,
  View,
  Platform,
  TextInput,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useContext, useState } from "react";
import SelectFromList from "./SelectFromList";
import ConfirmationModal from "./ConfirmationModal";
import { shadow } from "../../Components/Constants/Shadow";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import GradientView from "../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Marketing(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [message, setMessage] = useState<string>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const dummyMsg =
    "Hello David,\nWe are launching our new product called “Isaw ng Manok” and we would like to invited you to join us in our launching day with free entrance!\nSee out poster @\nhttps://testing.com/page";

  function dropdownViewStyle(zIndex: number): StyleProp<ViewStyle> {
    return [
      {
        width: "100%",
        zIndex: zIndex,
        alignItems: "center",
        gap: screenHeight * 0.02,
        height: Platform.OS == "ios" ? screenHeight * 0.06 : null,
      },
    ];
  }

  const stores = [
    { key: 1, value: "iTextKita" },
    { key: 2, value: "Kit Shop" },
    { key: 3, value: "Ads Tool" },
    { key: 4, value: "Ka-Tubig" },
    { key: 5, value: "iTextKita" },
    { key: 6, value: "Kit Shop" },
    { key: 7, value: "Ads Tool" },
    { key: 8, value: "Ka-Tubig" },
  ];

  const customers = [
    { key: 1, value: "John Wick" },
    { key: 2, value: "Mark Laviste" },
    { key: 3, value: "Lisa Morgan" },
    { key: 4, value: "Danilo Cane" },
    { key: 5, value: "John Wick" },
    { key: 6, value: "Mark Laviste" },
    { key: 7, value: "Lisa Morgan" },
    { key: 8, value: "Danilo Cane" },
  ];

  const inputsData = [
    { value: "Campaign value", key: 1 },
    { value: "Poster", key: 2 },
    { value: "Youtube ID", key: 3 },
    { value: "Facebook ID", key: 4 },
    { value: "Duration", key: 5 },
  ];

  return (
    <GradientView style={[styles.container, { paddingTop: "2%" }]}>
      <ScrollView
        style={{ height: "100%" }}
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{
          flexGrow: 1,
          width: screenWidth,
          alignItems: "center",
        }}
      >
        <View
          style={{
            zIndex: 2,
            alignItems: "center",
            gap: screenHeight * 0.02,
            width: dimensionSetter({
              mobile: "100%",
              tabPort: "100%",
              tabLand: "60%",
            }),
          }}
        >
          <View
            style={[
              styles.tileView,
              {
                width: "90%",
                justifyContent: "center",
                height: screenHeight * 0.06,
              },
            ]}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: fontRegular,
                fontSize: screenHeight * 0.03,
                paddingTop: Platform.OS == "android" ? "2%" : null,
              }}
            >
              Title
            </Text>
          </View>
          <View
            style={[
              styles.textInput,
              {
                width: "90%",
                height: "30%",
                paddingVertical: isTabLandscape ? "3%" : "2%",
                paddingHorizontal: isTabLandscape ? "2%" : "4%",
              },
            ]}
          >
            <TextInput
              multiline={true}
              scrollEnabled={true}
              placeholder={dummyMsg}
              selectionColor={Colors.primary}
              onChangeText={(text) => {
                setMessage(text);
              }}
              placeholderTextColor={Colors.primary}
              style={{
                textAlign: "justify",
                color: Colors.primary,
                fontFamily: fontRegular,
                fontSize: screenHeight * 0.02,
              }}
            />
          </View>
          <View style={dropdownViewStyle(5)}>
            <SelectFromList data={stores} placeholder="Select Store" />
          </View>
          <View style={dropdownViewStyle(4)}>
            <SelectFromList data={customers} placeholder="Select Customer" />
          </View>
          <View style={dropdownViewStyle(3)}>
            <SelectFromList
              data={inputsData}
              placeholder="Select Campaign Shortlink"
            />
          </View>
          <FlatButton
            zIndex={2}
            title="Send"
            onPressed={() => setShowModal(!showModal)}
            width={"90%"}
          />
        </View>
        <ConfirmationModal
          message={message}
          modalVisible={showModal}
          setShowModal={(value) => setShowModal(value)}
        />
        <TwoPersons style={styles.twoPersons} />
      </ScrollView>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tileView: {
    ...shadow,
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: Colors.primary,
  },
  tileText: {
    zIndex: 2,
    opacity: 0.5,
    color: "white",
    textAlignVertical: "center",
  },
  textInput: {
    ...shadow,
    color: Colors.primary,
    borderTopLeftRadius: 30,
    backgroundColor: "#D9D9D9",
    borderBottomRightRadius: 30,
  },
  dropdownIcon: {
    zIndex: 2,
    borderRadius: 100,
    backgroundColor: "#F6851F",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
