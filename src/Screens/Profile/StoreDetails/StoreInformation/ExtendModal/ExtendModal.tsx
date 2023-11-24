import { useContext } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SelectMonth from "./SelectMonth";
import { Colors } from "../../../../../Components/Constants/Colors";
import FlatButton from "../../../../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../../../../Components/Contexts/DimensionsContext";

interface propsType {
  modalVisible: boolean;
  setShowModal: (value: boolean) => void;
}

export default function ExtendModal(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.015,
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
              backgroundColor: Colors.primary,
              borderRadius: screenHeight * 0.03,
              paddingVertical: isTabLandscape ? "3%" : "5%",
              height: isTabLandscape ? screenHeight * 0.6 : screenHeight * 0.5,
              width: dimensionSetter({
                mobile: "90%",
                tabPort: "80%",
                tabLand: "60%",
              }),
            },
          ]}
        >
          <Text
            style={[
              styles.titleText,
              {
                fontSize: isTabLandscape
                  ? screenHeight * 0.025
                  : screenHeight * 0.02,
              },
            ]}
          >
            Sender ID Usage Extension
          </Text>
          <ScrollView
            contentContainerStyle={[
              styles.scrollView,
              { gap: screenHeight * 0.03 },
            ]}
          >
            <View
              style={{
                zIndex: 3,
                width: isTabLandscape ? "70%" : "80%",
                gap: isTabLandscape ? screenHeight * 0.02 : screenHeight * 0.01,
              }}
            >
              <Text style={textStyle}>Lenght of extension</Text>
              <View
                style={{
                  zIndex: 3,
                  height: Platform.OS == "ios" ? screenHeight * 0.06 : null,
                }}
              >
                <SelectMonth />
              </View>
              <Text style={textStyle}>
                Credit to Consume:{" "}
                <Text
                  style={{
                    fontSize: isTabLandscape
                      ? screenHeight * 0.03
                      : screenHeight * 0.02,
                    fontFamily: fontBold,
                  }}
                >
                  1500
                </Text>
              </Text>
              <Text style={textStyle}>
                Available Credits:{" "}
                <Text
                  style={{
                    fontSize: isTabLandscape
                      ? screenHeight * 0.03
                      : screenHeight * 0.02,
                    fontFamily: fontBold,
                  }}
                >
                  9999
                </Text>
              </Text>
            </View>
            <FlatButton
              title="Extend"
              onPressed={() => props.setShowModal(false)}
              width={isTabLandscape ? "70%" : "80%"}
            />
          </ScrollView>
          <View style={{ position: "absolute", top: "3%", right: "3%" }}>
            <MaterialIcons
              name="cancel"
              color={Colors.secondary}
              size={screenHeight * 0.04}
              onPress={() => props.setShowModal(false)}
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
  titleText: {
    color: "#fff",
    marginBottom: "5%",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
