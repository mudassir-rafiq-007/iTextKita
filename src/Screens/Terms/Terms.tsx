import { useContext } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import TermsIcon from "../../../assets/images/terms.svg";
import ShieldIcon from "../../../assets/images/shield.svg";
import ITextKita from "../../../assets/images/iTextKita.svg";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import GradientView from "../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function Terms(props: propsType) {
  const { isMobile, fontRegular, isTabLandscape } =
    useContext(DimensionsContext);

  const terms = [
    "I will not send spam messages.",
    "I will not send spam messages.",
    "I will not send spam messages.",
    "I will not send spam messages.",
    "I will not send spam messages.",
  ];

  return (
    <GradientView style={{ flex: 1, alignItems: "center" }}>
      <ITextKita
        height={moderateVerticalScale(100)}
        style={{
          marginBottom: moderateVerticalScale(25),
          marginTop: isTabLandscape
            ? moderateVerticalScale(25)
            : moderateVerticalScale(50),
        }}
      />
      <TermsIcon
        width={moderateVerticalScale(150)}
        height={moderateVerticalScale(90)}
      />
      <View
        style={[
          styles.listView,
          {
            width: moderateScale(300),
            height: moderateVerticalScale(250),
          },
        ]}
      >
        <FlatList
          data={terms}
          contentContainerStyle={{
            width: "100%",
            gap: moderateVerticalScale(5),
            paddingTop: moderateVerticalScale(5),
          }}
          renderItem={({ item }) => (
            <View style={styles.tileView}>
              <ShieldIcon />
              <Text
                style={{
                  fontFamily: fontRegular,
                  marginHorizontal: moderateScale(10),
                  fontSize: isMobile
                    ? moderateVerticalScale(14)
                    : moderateVerticalScale(11),
                }}
              >
                {item}
              </Text>
            </View>
          )}
        />
      </View>
      <FlatButton
        zIndex={2}
        title="Next"
        width={moderateScale(250)}
        onPressed={() => props.navigation.navigate("Login")}
      />
      <TwoPersons style={styles.twoPersons} />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  listView: {
    zIndex: 2,
    borderWidth: 1,
    borderColor: "black",
  },
  tileView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCF3F3",
    marginHorizontal: moderateScale(10),
    height: moderateVerticalScale(40, 0.05),
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.5,
    position: "absolute",
  },
});
