import { useContext, useState } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

export default function InputFields() {
  const { fontRegular, isTabLandscape, isTabPortrait } = useContext(DimensionsContext);

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  return (
    <View style={styles.form}>
      <View style={styles.inputField}>
        <Image
          style={styles.icon}
          source={require("../../../assets/images/png/User.png")}
        />
        <TextInput
          placeholder="User Name"
          selectionColor={"#fff"}
          placeholderTextColor={Colors.placeholder}
          style={[styles.textInput, { fontFamily: fontRegular, 
            fontSize: (isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))), }]}
        />
      </View>
      <View style={styles.inputField}>
        <Image
          style={styles.icon}
          source={require("../../../assets/images/png/Key.png")}
        />
        <TextInput
          placeholder="Password"
          selectionColor={"#fff"}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Colors.placeholder}
          style={[
            styles.textInput,
            { fontFamily: fontRegular, width: moderateScale(200),
              fontSize: (isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))), },
          ]}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/png/Hide.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    zIndex: 2,
    width: moderateScale(280),
    gap: moderateVerticalScale(15, 0.05),
  },
  inputField: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.primary,
    height: moderateVerticalScale(40, 0.05),
  },
  textInput: {
    width: "100%",
    color: "#fff",
    fontSize: moderateVerticalScale(14, 0.05),
  },
  icon: {
    height: moderateVerticalScale(18, 0.05),
    width: moderateVerticalScale(18, 0.05),
    marginHorizontal: moderateScale(10),
  },
});
