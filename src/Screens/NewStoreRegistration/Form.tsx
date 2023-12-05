import { View, Text, Platform } from "react-native";
import React, { useContext } from "react";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import InputField from "./InputField";
import SelectFromList from "./SelectFromList";
import FlatButton from "../../Components/Buttons/FlatButton";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";

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
    isTabPortrait,
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
    fontSize: (isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))),
  };

  return (
    <View
      style={{
        alignItems: "center",
        width: isTabLandscape ? "80%" : "80%",
        justifyContent: isTabLandscape ? "center" : null,
        gap: isTabLandscape ? screenWidth * 0.01 : screenHeight * 0.01,
      }}
    >
      <InputField title="Business Name" placeholder="My Store" />
      <View style={{ zIndex: 3, width: "100%" }}>
        <Text style={textStyle}>Business Category *</Text>
        <View
          style={{
            width: "100%",
            // height: Platform.OS == "ios" ? screenHeight * 0.06 : null,
          }}
        >
          <SelectFromList placeholder="Retail" data={businessCategory} />
        </View>
      </View>
      <InputField title="Sender ID" placeholder="#QUE$$F$F" />
      <InputField title="DTI" placeholder="No File Chosen" />
      {/* <FlatButton
        zIndex={2}
        title="Register"
        width={verticalScale(250)}
        height={moderateVerticalScale(40, 0.05)}
        onPressed={() => props.onPressHandle("register")}
      /> */}
         <FlatButton
          zIndex={2}
          title="Register"
          onPressed={() => props.onPressHandle("register")}
          width={(isTabPortrait ? moderateVerticalScale(250, 0.5):(isTabLandscape ? moderateVerticalScale(250, 0.5): moderateVerticalScale(250,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
    </View>
  );
}
