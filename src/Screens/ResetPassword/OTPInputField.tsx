import { View, Text, TextInput } from "react-native";
import { Dispatch, SetStateAction, useContext, useRef } from "react";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import OTPInputView from "@twotalltotems/react-native-otp-input";


export default function OTPInputField() {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  return (
    <OTPInputView
      pinCount={4}
      autoFocusOnLoad={true}
      keyboardType="number-pad"
      selectionColor="#ffffff"
      onCodeFilled={(code) => console.log("This is OTP:", code)}
      codeInputFieldStyle={{
        borderColor: Colors.secondary,
      }}
      style={{
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        width: dimensionSetter({
          mobile: "80%",
          tabPort: "80%",
          tabLand: "40%",
        }),
      }}
    />
  );
}
