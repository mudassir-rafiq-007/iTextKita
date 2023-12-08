import { useContext } from "react";
import { View, Text } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import FlatButton from "../../Components/Buttons/FlatButton";
import InputField from "../../Components/InputField/InputField";
import SelectFromList from "../../Components/SelectFromList/SelectFromList";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  onPressHandle: (value: "register") => void;
}

export default function Form(props: propsType) {
  const { isMobile, fontRegular } = useContext(DimensionsContext);

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
    fontSize: isMobile ? moderateVerticalScale(14) : moderateVerticalScale(11),
  };

  return (
    <View
      style={{
        width: "80%",
        alignItems: "center",
        gap: moderateVerticalScale(5),
      }}
    >
      <InputField title="Business Name" placeholder="My Store" />
      <View style={{ zIndex: 3, width: "100%" }}>
        <Text style={textStyle}>Business Category *</Text>
        <SelectFromList placeholder="Retail" data={businessCategory} />
      </View>
      <InputField title="Sender ID" placeholder="#QUE$$F$F" />
      <InputField title="DTI" placeholder="No File Chosen" />
      <FlatButton
        zIndex={2}
        title="Register"
        width={moderateVerticalScale(250)}
        onPressed={() => props.onPressHandle("register")}
      />
    </View>
  );
}
