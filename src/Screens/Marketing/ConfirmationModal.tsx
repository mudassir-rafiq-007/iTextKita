import { useContext } from "react";
import {
  Text,
  View,
  Modal,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import TextButton from "../../Components/Buttons/TextButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  message: string;
  modalVisible: boolean;
  setShowModal: (value: boolean) => void;
}

export default function ConfirmationModal(props: propsType) {
  const { fontRegular, screenWidth, isTabLandscape, isTabPortrait, dimensionSetter } =
    useContext(DimensionsContext);

  const dummyMsg =
    "Hello David,\nWe are launching our new product called “Isaw ng Manok” and we would like to invited you to join us in our launching day with free entrance!\nSee out poster @\nhttps://testing.com/page";

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize: moderateVerticalScale(12),
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={props.modalVisible}
    >
      <View style={styles.main}>
        <View
          style={[
            {
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.primary,
              borderRadius: moderateVerticalScale(20),
              // paddingVertical: isTabLandscape ? "3%" : "5%",
              gap: isTabLandscape ? null : moderateVerticalScale(10),
              height: (isTabPortrait ? moderateVerticalScale(500, 0.5):(isTabLandscape ? moderateVerticalScale(300, 0.5): moderateVerticalScale(480,0.5))),
              width: (isTabPortrait ? moderateVerticalScale(450, 0.5):(isTabLandscape ? moderateVerticalScale(550, 0.5): moderateVerticalScale(320,0.5))),
              // height: isTabLandscape
              //   ? moderateVerticalScale(350)
              //   : moderateVerticalScale(520, 0.8),
              // width: dimensionSetter({
              //   mobile: "90%",
              //   tabPort: "80%",
              //   tabLand: "80%",
              // }),
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
              <View style={{ gap: moderateVerticalScale(5) }}>
                <Text style={textStyle}>Total Credit Cost</Text>
                <View
                  style={[
                    styles.textView,
                    { height: moderateVerticalScale(40) },
                  ]}
                >
                  <TextInput
                    editable={false}
                    placeholder="400"
                    placeholderTextColor={Colors.primary}
                    style={[
                      styles.textInputView,
                      {
                        fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5))),
                        fontFamily: fontRegular,
                      },
                    ]}
                  />
                </View>
              </View>
              <View style={{ gap: moderateVerticalScale(5) }}>
                <Text style={textStyle}>Sender ID</Text>
                <View
                  style={[
                    styles.textView,
                    { height: moderateVerticalScale(40) },
                  ]}
                >
                  <TextInput
                    editable={false}
                    placeholder="#QF4N54GLN"
                    placeholderTextColor={Colors.primary}
                    style={[
                      styles.textInputView,
                      {
                        fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5))),
                        fontFamily: fontRegular,
                      },
                    ]}
                  />
                </View>
              </View>
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
                        fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5))),
                        fontFamily: fontRegular,
                      },
                    ]}
                  >
                    {props.message || dummyMsg}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            {/* <FlatButton
              title="Confirm"
              onPressed={() => props.setShowModal(false)}
              width={dimensionSetter({
                mobile: screenWidth * 0.8,
                tabPort: screenWidth * 0.7,
                tabLand: null,
              })}
            /> */}

            <FlatButton
              // zIndex={2}
              title="Confirm"
              width={(isTabPortrait ? moderateVerticalScale(400, 0.5):(isTabLandscape ? moderateVerticalScale(450, 0.5): moderateVerticalScale(280,0.5)))}
              height={moderateVerticalScale(40, 0.05)}
              onPressed={() => props.setShowModal(false)}
              titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
            />
            {/* <TextButton
              title="Cancel"
              textDecorationLine="underline"
              onPressed={() => props.setShowModal(false)}
            /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff8",
  },
  textView: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "#D7D7D7",
    borderColor: Colors.secondary,
  },
  textInputView: {
    flex: 1,
    paddingLeft: "4%",
    backgroundColor: "#D7D7D7",
    textAlignVertical: "center",
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
