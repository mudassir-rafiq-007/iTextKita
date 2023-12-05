import { useContext, useState } from "react";
import { Text, View, Platform, TextInput, StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";
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
          <View style={[styles.tileView,{width:(isTabPortrait ? moderateVerticalScale(500, 0.5):(isTabLandscape ? moderateVerticalScale(400, 0.5): moderateVerticalScale(300,0.5)))} ]}>
            <TextInput style={[styles.title, { fontFamily: fontRegular, fontSize: (isTabPortrait ? moderateVerticalScale(15, 0.5):(isTabLandscape ? moderateVerticalScale(15, 0.5): moderateVerticalScale(17,0.5))) }]}>
              Buy 1 Take One Promo
            </TextInput>
          </View>
          <View
            style={[
              styles.textInputView,
              {
                height: (isTabPortrait ? moderateVerticalScale(230, 0.5):(isTabLandscape ? moderateVerticalScale(190, 0.5): moderateVerticalScale(220,0.5))),
                width: (isTabPortrait ? moderateVerticalScale(500, 0.5):(isTabLandscape ? moderateVerticalScale(400, 0.5): moderateVerticalScale(300,0.5)))
                // height: isTabLandscape
                //   ? moderateVerticalScale(170)
                //   : moderateVerticalScale(230),
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
              style={[styles.textInput, { fontFamily: fontRegular, fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(14.5,0.5))) }]}
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
          {/* <FlatButton
            zIndex={2}
            title="Send"
            height={moderateScale(30, 0.5)}
            width={moderateScale(320, 0.5)}
            onPressed={() => setShowModal(!showModal)}
          /> */}
        <FlatButton
          zIndex={2}
          title="Send"
          width={(isTabPortrait ? moderateVerticalScale(480, 0.5):(isTabLandscape ? moderateVerticalScale(400, 0.5): moderateVerticalScale(300,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          onPressed={() => setShowModal(!showModal)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
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
    width: scale(300),
    gap: moderateScale(10),
  },
  tileView: {
    ...shadow,
    // width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    height: moderateScale(40, 0.05),
    borderTopLeftRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
  },
  tileText: {
    zIndex: 2,
    opacity: 0.5,
    color: "white",
    textAlignVertical: "center",
  },
  title: {
    color: "#fff",
    fontSize: moderateScale(13),
    paddingTop: Platform.OS == "android" ? "2%" : null,
  },
  textInputView: {
    ...shadow,
    width: "100%",
    color: Colors.primary,
    backgroundColor: "#D9D9D9",
    padding: verticalScale(15),
    borderTopLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
  },
  textInput: {
    textAlign: "justify",
    color: Colors.primary,
    // fontSize: moderateVerticalScale(13),
  },
  dropdownView: {
    width: "100%",
    alignItems: "center",
    height: Platform.OS == "ios" ? moderateScale(40, .05) : null,
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
