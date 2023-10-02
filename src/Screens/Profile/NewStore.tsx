import { useContext } from "react";
import {
  Text,
  View,
  Modal,
  Platform,
  TextInput,
  StyleSheet,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FolderIcon from "../../../assets/folder.svg";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  modalVisible: boolean;
  setShowModal: (value: boolean) => void;
}
export default function NewStoreModal(props: propsType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  function inputFieldStyle() {
    return [
      styles.inputField,
      {
        height: dimensionSetter({
          mobile: screenHeight * 0.05,
          tabPort: screenHeight * 0.05,
          tabLand: screenHeight * 0.06,
        }),
        paddingHorizontal: dimensionSetter({
          mobile: screenWidth * 0.03,
          tabPort: screenWidth * 0.03,
          tabLand: screenWidth * 0.01,
        }),
      },
    ];
  }

  function inputTextStyle() {
    return [
      styles.textInput,
      {
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.022,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
        marginTop: dimensionSetter({
          mobile: Platform.OS == "android" ? screenHeight * 0.005 : null,
          tabPort: Platform.OS == "android" ? screenHeight * 0.01 : null,
          tabLand: Platform.OS == "android" ? screenHeight * 0.005 : null,
        }),
      },
    ];
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
    >
      <View style={styles.main}>
        <View
          style={[
            styles.modal,
            {
              gap: screenHeight * 0.03,
              width: dimensionSetter({
                mobile: screenWidth * 0.9,
                tabPort: screenWidth * 0.7,
                tabLand: screenWidth * 0.5,
              }),
              height: screenHeight * 0.5,
            },
          ]}
        >
          <View
            style={[
              styles.titleView,
              {
                height: screenHeight * 0.06,
                width: dimensionSetter({
                  mobile: "70%",
                  tabPort: "50%",
                  tabLand: "50%",
                }),
              },
            ]}
          >
            <Text
              style={{
                color: Colors.primary,
                fontSize: screenHeight * 0.02,
                fontFamily: "Poppins-Regular",
                marginTop:
                  Platform.OS == "android" ? screenHeight * 0.005 : null,
              }}
            >
              New Store
            </Text>
          </View>
          <View
            style={{
              gap: screenHeight * 0.01,
              width: dimensionSetter({
                mobile: "90%",
                tabPort: "80%",
                tabLand: "70%",
              }),
            }}
          >
            <View style={inputFieldStyle()}>
              <TextInput
                style={inputTextStyle()}
                placeholder="Business Name"
                textAlignVertical="center"
                placeholderTextColor={Colors.primary}
                onChangeText={(text) => {}}
              />
            </View>
            <View style={inputFieldStyle()}>
              <TextInput
                style={inputTextStyle()}
                placeholder="Sender ID"
                textAlignVertical="center"
                placeholderTextColor={Colors.primary}
                onChangeText={(text) => {}}
              />
            </View>
            <View style={inputFieldStyle()}>
              <TextInput
                style={inputTextStyle()}
                placeholder="DTI Document"
                textAlignVertical="center"
                placeholderTextColor={Colors.primary}
                onChangeText={(text) => {}}
                editable={false}
              />
              <FolderIcon />
            </View>
          </View>
          <FlatButton title="Add" onPressed={() => props.setShowModal(false)} />
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
    backgroundColor: "#FFF8",
  },
  modal: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  titleView: {
    width: "70%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputField: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: Colors.primary,
    fontFamily: "Poppins-Regular",
  },
});
