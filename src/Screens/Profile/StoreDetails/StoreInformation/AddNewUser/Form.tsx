import { useContext } from "react";
import { View, Text, Platform } from "react-native";
import InputField from "./InputField";
import FlatButton from "../../../../../Components/Buttons/FlatButton";
import SelectFromList from "../../../../NewStoreRegistration/SelectFromList";
import { DimensionsContext } from "../../../../../Components/Contexts/DimensionsContext";

interface propsType {
  setShowModal: (value: "next") => void;
}

export default function Form(props: propsType) {
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
    fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.015,
  };

  const roles = [
    { key: 1, value: "Owner" },
    { key: 2, value: "General Manager" },
    { key: 1, value: "Superviser" },
    { key: 1, value: "Manager" },
    { key: 1, value: "Assistant" },
    { key: 1, value: "Sales" },
  ];
  return (
    <View
      style={{
        zIndex: 3,
        width: "100%",
        alignItems: "center",
        gap: isTabLandscape ? screenHeight * 0.04 : screenHeight * 0.02,
      }}
    >
      <View
        style={{
          width: "90%",
          flexDirection: isTabLandscape ? "row" : "column",
          gap: isTabLandscape ? screenWidth * 0.05 : screenHeight * 0.02,
          justifyContent: isTabLandscape ? "center" : null,
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
            zIndex: 3,
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
          <View style={{ zIndex: 3, width: "100%" }}>
            <Text style={textStyle}>Role *</Text>
            <View
              style={{
                width: "100%",
                height: Platform.OS == "ios" ? screenHeight * 0.06 : null,
              }}
            >
              <SelectFromList placeholder="Manager" data={roles} />
            </View>
          </View>
        </View>
      </View>
      <FlatButton
        zIndex={2}
        title="Next"
        onPressed={() => props.setShowModal("next")}
        width={isTabLandscape ? "50%" : "90%"}
        containerStyle={{ alignSelf: "center" }}
      />
    </View>
  );
}
