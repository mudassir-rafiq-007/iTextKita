import { useContext, useState } from "react";
import { Text, View, Platform, TextInput, StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
  const { fontRegular, screenWidth, isTabPortrait, isTabLandscape } =
    useContext(DimensionsContext);

  const [message, setMessage] = useState<string>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const dummyMsg =
    "Hello David,\nWe are launching our new product called “Isaw ng Manok” and we would like to invited you to join us in our launching day with free entrance!\nSee out poster @\nhttps://testing.com/page";

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
    <GradientView style={{ flex: 1, paddingTop: isTabPortrait ? "8%" : "2%" }}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        style={{ height: "100%" }}
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={{
          flexGrow: 1,
          width: screenWidth,
          alignItems: "center",
        }}
      >
        <View style={styles.main}>
          <View style={styles.tileView}>
            <Text style={[styles.title, { fontFamily: fontRegular }]}>
              Title
            </Text>
          </View>
          <View
            style={[
              styles.textInputView,
              {
                height: isTabLandscape
                  ? moderateVerticalScale(120)
                  : moderateVerticalScale(150),
              },
            ]}
          >
            <TextInput
              multiline={true}
              scrollEnabled={true}
              placeholder={dummyMsg}
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.primary}
              onChangeText={(text) => setMessage(text)}
              style={[styles.textInput, { fontFamily: fontRegular }]}
            />
          </View>
          <View style={[styles.dropdownView, { zIndex: 5 }]}>
            <SelectFromList data={stores} placeholder="Select Store" />
          </View>
          <View style={[styles.dropdownView, { zIndex: 4 }]}>
            <SelectFromList data={customers} placeholder="Select Customer" />
          </View>
          <View style={[styles.dropdownView, { zIndex: 3 }]}>
            <SelectFromList
              data={inputsData}
              placeholder="Select Campaign Shortlink"
            />
          </View>
          <FlatButton
            zIndex={2}
            title="Send"
            width={moderateScale(300)}
            onPressed={() => setShowModal(!showModal)}
          />
        </View>
        <ConfirmationModal
          message={message}
          modalVisible={showModal}
          setShowModal={(value) => setShowModal(value)}
        />
        <TwoPersons style={styles.twoPersons} />
      </KeyboardAwareScrollView>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  main: {
    zIndex: 2,
    alignItems: "center",
    width: moderateScale(300),
    gap: moderateVerticalScale(10),
  },
  tileView: {
    ...shadow,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    height: moderateVerticalScale(40),
    borderTopLeftRadius: moderateVerticalScale(8),
    borderBottomRightRadius: moderateVerticalScale(8),
  },
  tileText: {
    zIndex: 2,
    opacity: 0.5,
    color: "white",
    textAlignVertical: "center",
  },
  title: {
    color: "#fff",
    fontSize: moderateVerticalScale(20),
    paddingTop: Platform.OS == "android" ? "2%" : null,
  },
  textInputView: {
    ...shadow,
    width: "100%",
    color: Colors.primary,
    backgroundColor: "#D9D9D9",
    padding: moderateScale(15),
    borderTopLeftRadius: moderateVerticalScale(25),
    borderBottomRightRadius: moderateVerticalScale(25),
  },
  textInput: {
    textAlign: "justify",
    color: Colors.primary,
    fontSize: moderateVerticalScale(14),
  },
  dropdownView: {
    width: "100%",
    alignItems: "center",
    height: Platform.OS == "ios" ? moderateVerticalScale(40) : null,
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
