import { useContext } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import InputField from "../../Components/InputField/InputField";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  message: string;
  modalVisible: boolean;
  setShowModal: (value: boolean) => void;
}

export default function ConfirmationModal(props: propsType) {
  const {
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
    isMobile,
    valueFor,
  } = useContext(DimensionsContext);

  const dummyMsg =
    "Hello David,\nWe are launching our new product called “Isaw ng Manok” and we would like to invited you to join us in our launching day with free entrance!\nSee out poster @\nhttps://testing.com/page";

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize: isMobile ? moderateVerticalScale(14) : moderateVerticalScale(11),
  };

  return (
    <CustomModal
      modalVisible={props.modalVisible}
      screenHeight={screenHeight}
      style={[
        styles.main,
        {
          gap: isTabLandscape ? null : moderateVerticalScale(10),
          height: valueFor({
            mobile: moderateVerticalScale(480),
            tabPortrait: moderateVerticalScale(480),
            tabLandscape: moderateVerticalScale(300),
          }),
          width: valueFor({
            mobile: moderateVerticalScale(320),
            tabPortrait: moderateVerticalScale(400),
            tabLandscape: moderateVerticalScale(500),
          }),
        },
      ]}
    >
      <View
        style={{
          width: "90%",
          gap: moderateVerticalScale(10),
          height: isTabLandscape ? "60%" : null,
          flexDirection: isTabLandscape ? "row" : "column",
          justifyContent: isTabLandscape ? "space-around" : null,
        }}
      >
        <View
          style={{
            gap: moderateVerticalScale(10),
            width: isTabLandscape ? "40%" : null,
          }}
        >
          <InputField
            title="Total Credit Cost"
            placeholder="400"
            optional={true}
          />
          <InputField
            title="Sender ID"
            placeholder="#QF4N54GLN"
            optional={true}
          />
        </View>
        <View style={{ width: isTabLandscape ? "50%" : null }}>
          <View style={{ gap: moderateVerticalScale(5) }}>
            <Text style={textStyle}>Message</Text>
            <ScrollView
              style={[
                styles.textView,
                {
                  height: isTabLandscape
                    ? moderateVerticalScale(120)
                    : moderateVerticalScale(200),
                },
              ]}
            >
              <Text
                style={[
                  styles.msgText,
                  {
                    fontFamily: fontRegular,
                    fontSize: isMobile
                      ? moderateVerticalScale(15)
                      : moderateVerticalScale(12),
                  },
                ]}
              >
                {props.message || dummyMsg}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", width: "100%" }}>
        <FlatButton
          title="Confirm"
          width={"85%"}
          onPressed={() => props.setShowModal(false)}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderRadius: moderateVerticalScale(20),
  },
  textView: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: Colors.secondary,
  },
  msgText: {
    padding: "4%",
    textAlign: "justify",
    color: Colors.primary,
    textAlignVertical: "top",
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
