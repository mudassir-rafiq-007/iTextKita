import { View, Text, Platform } from "react-native";
import React, { useContext } from "react";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import InputField from "./InputField";
import SelectFromList from "./SelectFromList";
import FlatButton from "../../Components/Buttons/FlatButton";

interface propsType{
    onPressHandle: (value: "register")=>void
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

  const businessCategory = [
    { key: 1, value: "Retail" },
    { key: 2, value: "Wholesale" },
    { key: 3, value: "Warehouse" },
    { key: 4, value: "Retail" },
    { key: 5, value: "Wholesale" },
    { key: 6, value: "Warehouse" },
  ];

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.015,
  };

  return (
    <View
      style={{
        alignItems: "center",
        width: isTabLandscape ? "80%" : "90%",
        justifyContent: isTabLandscape ? "center" : null,
        gap: isTabLandscape ? screenWidth * 0.01 : screenHeight * 0.02,
      }}
    >
      <InputField title="Business Name" placeholder="My Store" />
      <View style={{ zIndex: 3, width: "100%" }}>
        <Text style={textStyle}>Business Category *</Text>
        <View
          style={{
            width: "100%",
            height: Platform.OS == "ios" ? screenHeight * 0.06 : null,
          }}
        >
          <SelectFromList placeholder="Retail" data={businessCategory} />
        </View>
      </View>
      <InputField title="Sender ID" placeholder="#QUE$$F$F" />
      <InputField title="DTI" placeholder="No File Chosen" editable={false} />
      <FlatButton
        zIndex={2}
        title="Register"
        width={isTabLandscape ? "50%" : "100%"}
        onPressed={() => props.onPressHandle("register")}
      />
    </View>
  );
}
