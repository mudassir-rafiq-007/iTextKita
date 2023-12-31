import { useContext } from "react";
import {
  Text,
  View,
  Modal,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
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
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const dummyMsg =
    "Hello David,\nWe are launching our new product called “Isaw ng Manok” and we would like to invited you to join us in our launching day with free entrance!\nSee out poster @\nhttps://testing.com/page";

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.015,
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
              borderRadius: screenHeight * 0.03,
              gap: isTabLandscape ? null : screenHeight * 0.02,
              paddingVertical: isTabLandscape ? "3%" : "5%",
              height: isTabLandscape ? screenHeight * 0.6 : screenHeight * 0.7,
              width: dimensionSetter({
                mobile: "90%",
                tabPort: "80%",
                tabLand: "80%",
              }),
            },
          ]}
        >
          <View
            style={{
              width: isTabLandscape ? "90%" : "90%",
              height: isTabLandscape ? "60%" : null,
              flexDirection: isTabLandscape ? "row" : "column",
              justifyContent: isTabLandscape ? "space-around" : null,
              gap: isTabLandscape ? screenHeight * 0.05 : screenHeight * 0.02,
            }}
          >
            <View
              style={{
                gap: screenHeight * 0.02,
                width: isTabLandscape ? "40%" : null,
              }}
            >
              <View style={{ gap: screenHeight * 0.01 }}>
                <Text style={textStyle}>Total Credit Cost</Text>
                <View
                  style={[styles.textView, { height: screenHeight * 0.06 }]}
                >
                  <TextInput
                    editable={false}
                    placeholder="400"
                    placeholderTextColor={Colors.primary}
                    style={[
                      styles.textInputView,
                      {
                        fontSize: screenHeight * 0.02,
                        fontFamily: isTabLandscape ? fontBold : fontRegular,
                      },
                    ]}
                  />
                </View>
              </View>
              <View style={{ gap: screenHeight * 0.01 }}>
                <Text style={textStyle}>Sender ID</Text>
                <View
                  style={[styles.textView, { height: screenHeight * 0.06 }]}
                >
                  <TextInput
                    editable={false}
                    placeholder="#QF4N54GLN"
                    placeholderTextColor={Colors.primary}
                    style={[
                      styles.textInputView,
                      {
                        fontSize: screenHeight * 0.02,
                        fontFamily: isTabLandscape ? fontBold : fontRegular,
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
            <View style={{ width: isTabLandscape ? "50%" : null }}>
              <View style={{ gap: screenHeight * 0.01 }}>
                <Text style={textStyle}>Message</Text>
                <ScrollView
                  style={[
                    styles.textView,
                    {
                      height: isTabLandscape
                        ? screenHeight * 0.2
                        : screenHeight * 0.25,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.msgText,
                      {
                        fontSize: screenHeight * 0.02,
                        fontFamily: isTabLandscape ? fontBold : fontRegular,
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
            <FlatButton
              title="Confirm"
              onPressed={() => props.setShowModal(false)}
              width={dimensionSetter({
                mobile: screenWidth * 0.8,
                tabPort: screenWidth * 0.7,
                tabLand: null,
              })}
            />
            <TextButton
              title="Cancel"
              textDecorationLine="underline"
              onPressed={() => props.setShowModal(false)}
            />
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
