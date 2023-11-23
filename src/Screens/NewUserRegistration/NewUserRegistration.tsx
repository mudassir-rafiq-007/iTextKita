import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "./InputField";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  modalVisible: boolean;
  setShowModal: (value: boolean) => void;
}

export default function NewUserRegistration(props: propsType) {
  const {
    fontFamily,
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
          height: isTabLandscape ? screenHeight * 0.6 : screenHeight * 0.7,
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
            fontSize: isTabLandscape
              ? screenHeight * 0.04
              : screenHeight * 0.02,
          },
        ]}
      >
        User Account
      </Text>
      <View
        style={{
          width: "90%",
          flexDirection: isTabLandscape ? "row" : "column",
          justifyContent: isTabLandscape ? "center" : null,
          gap: isTabLandscape ? screenWidth * 0.05 : screenHeight * 0.02,
        }}
      >
        <View
          style={{
            gap: screenHeight * 0.02,
            width: isTabLandscape ? "40%" : null,
          }}
        >
          <InputField title="First Name" placeholder="John" />
          <InputField title="Last Name" placeholder="Smith" />
          {isTabLandscape ? (
            <InputField title="Mobile Number" placeholder="+92 302 4767172" />
          ) : (
            <InputField
              title="Password"
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
        </View>
        <View
          style={{
            gap: screenHeight * 0.02,
            width: isTabLandscape ? "40%" : null,
            justifyContent: isTabLandscape ? "flex-end" : null,
            flexDirection: isTabLandscape ? "column-reverse" : "column",
          }}
        >
          <InputField
            secureTextEntry={true}
            title="Confirm Password"
            placeholder="Confirm Password"
          />
          {!isTabLandscape ? (
            <InputField title="Mobile Number" placeholder="+92 302 4767172" />
          ) : (
            <InputField
              title="Password"
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
        </View>
      </View>
      <FlatButton
        title="Next"
        onPressed={() => {}}
        width={isTabLandscape ? "50%" : "90%"}
      />
      <View style={{ position: "absolute", top: "3%", right: "3%" }}>
        <MaterialIcons
          name="cancel"
          color={Colors.secondary}
          size={screenHeight * 0.04}
          onPress={() => props.setShowModal(false)}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
  },
});
