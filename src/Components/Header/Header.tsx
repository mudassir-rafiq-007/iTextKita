import { useContext } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HeaderMenu from "./HeaderMenu";
import { Colors } from "../Constants/Colors";
import ITextKita from "../../../assets/images/iTextKita.svg";
import { DimensionsContext } from "../Contexts/DimensionsContext";

type propType = {
  title: string;
  goBack?: () => void;
  showBackButton?: boolean;
};

export default function Header(props: propType) {
  const { fontBold } = useContext(DimensionsContext);

  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, alignItems: "center" }}>
      <ITextKita height={moderateVerticalScale(60)} />
      <View
        style={[
          styles.header,
          {
            justifyContent: props.showBackButton ? null : "space-between",
          },
        ]}
      >
        {props.showBackButton && (
          <TouchableOpacity onPress={props.goBack} style={styles.backButton}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.primary}
              size={moderateVerticalScale(20)}
            />
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: Colors.primary,
            fontFamily: fontBold,
            fontSize: moderateVerticalScale(20),
          }}
        >
          {props.title.toLocaleUpperCase()}
        </Text>
        {!props.showBackButton && <HeaderMenu />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: moderateScale(20),
  },
  backButton: {
    alignItems: "center",
    width: moderateScale(30),
    height: moderateScale(30),
    justifyContent: Platform.OS == "ios" ? "center" : null,
  },
});
