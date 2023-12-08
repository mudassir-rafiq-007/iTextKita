import { useContext, useState } from "react";
import { Text, View, Platform, TextInput, StyleSheet } from "react-native";
import {
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ConfirmationModal from "./ConfirmationModal";
import { shadow } from "../../Components/Constants/Shadow";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import GradientView from "../../Components/GradientView/GradientView";
import SelectFromList from "../../Components/SelectFromList/SelectFromList";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Marketing(props: propsType) {
  const { isMobile, fontRegular, isTabPortrait, valueFor } =
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
    <GradientView
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: isTabPortrait ? "8%" : "2%",
      }}
    >
      <View
        style={[
          styles.main,
          {
            width: valueFor({
              mobile: moderateVerticalScale(300),
              tabPortrait: moderateVerticalScale(500),
              tabLandscape: moderateVerticalScale(400),
            }),
          },
        ]}
      >
        <View style={styles.tileView}>
          <Text
            style={[
              styles.title,
              {
                fontFamily: fontRegular,
                fontSize: isMobile
                  ? moderateVerticalScale(17)
                  : moderateVerticalScale(17),
              },
            ]}
          >
            Buy 1 Take One Promo
          </Text>
        </View>
        <View
          style={[
            styles.textInputView,
            {
              height: valueFor({
                mobile: moderateVerticalScale(220),
                tabPortrait: moderateVerticalScale(230),
                tabLandscape: moderateVerticalScale(190),
              }),
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
            style={[
              styles.textInput,
              {
                fontFamily: fontRegular,
                fontSize: isMobile
                  ? moderateVerticalScale(14.5)
                  : moderateVerticalScale(12),
              },
            ]}
          />
        </View>
        <SelectFromList
          zIndex={5}
          data={stores}
          boxTextColor="#fff"
          boxBorderColor="#fff0"
          placeholder="Select Store"
          boxColor={Colors.primary}
        />
        <SelectFromList
          zIndex={4}
          data={customers}
          boxTextColor="#fff"
          boxBorderColor="#fff0"
          boxColor={Colors.primary}
          placeholder="Select Customer"
        />
        <SelectFromList
          zIndex={3}
          data={inputsData}
          boxTextColor="#fff"
          boxBorderColor="#fff0"
          boxColor={Colors.primary}
          placeholder="Select Campaign Shortlink"
        />
        <FlatButton
          zIndex={2}
          title="Send"
          width={isTabPortrait ? "95%" : "100%"}
          onPressed={() => setShowModal(!showModal)}
        />
      </View>
      <ConfirmationModal
        message={message}
        modalVisible={showModal}
        setShowModal={(value) => setShowModal(value)}
      />
      <TwoPersons style={styles.twoPersons} />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  main: {
    zIndex: 2,
    alignItems: "center",
    gap: moderateScale(10),
  },
  tileView: {
    ...shadow,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    height: moderateScale(40, 0.05),
    borderTopLeftRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
  },
  title: {
    color: "#fff",
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
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
