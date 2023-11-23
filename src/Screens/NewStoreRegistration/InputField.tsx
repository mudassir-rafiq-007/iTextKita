import { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import FolderIcon from "../../../assets/images/folder.svg";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  title: string;
  placeholder: string;
  editable?: boolean;
  secureTextEntry?: boolean;
}

export default function InputField(props: propsType) {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const textStyle = {
    color: "#fff",
    fontFamily: fontFamily,
    fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.015,
  };

  return (
    <View style={{ width: "100%" }}>
      <Text style={textStyle}>{props.title} *</Text>
      <View
        style={{
          width: "100%",
          borderWidth: 1,
          backgroundColor: "#f7f7f7",
          height: screenHeight * 0.06,
          borderColor: Colors.secondary,
          borderRadius: screenHeight * 0.005,
          paddingRight: props.title == "DTI" ? "4%" : null,
          alignItems: props.title == "DTI" ? "center" : null,
          flexDirection: props.title == "DTI" ? "row" : null,
        }}
      >
        <TextInput
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          placeholderTextColor={Colors.primary}
          editable={props.editable}
          style={{
            flex: 1,
            paddingLeft: "4%",
            color: Colors.primary,
            fontFamily: fontFamily,
            textAlignVertical: "center",
            fontSize: screenHeight * 0.02,
          }}
        />
        {props.title == "DTI" && <FolderIcon />}
      </View>
    </View>
  );
}
