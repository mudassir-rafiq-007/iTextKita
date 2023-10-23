import { useContext } from "react";
import {
  Text,
  View,
  Modal,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import FAIcons from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { shadow } from "../../Components/Constants/Shadow";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  fontFamily: string;
  modalVisible: boolean;
  setShowModal: (value: boolean) => void;
}
export default function BuyCreditModal(props: propsType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

    const [fontsLoaded] = useFonts({
      "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    });

  const credits = [
    "Poster 120 Credits",
    "Facebook Links 60 Credits",
    "Instagram 60 Credits",
  ];

  if (!fontsLoaded) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
    >
      <View style={styles.main}>
        <View
          style={[
            styles.modal,
            {
              gap: screenHeight * 0.03,
              width: dimensionSetter({
                mobile: screenWidth * 0.9,
                tabPort: screenWidth * 0.7,
                tabLand: screenWidth * 0.5,
              }),
              height: screenHeight * 0.5,
            },
          ]}
        >
          <View
            style={[
              styles.tileView,
              {
                height: screenHeight * 0.06,
                width: dimensionSetter({
                  mobile: "70%",
                  tabPort: "60%",
                  tabLand: "50%",
                }),
                marginHorizontal: dimensionSetter({
                  mobile: null,
                  tabPort: null,
                  tabLand: screenWidth * 0.02,
                }),
              },
            ]}
          >
            <Text
              style={[
                styles.tileText,
                {
                  fontFamily: props.fontFamily,
                  marginTop:
                    Platform.OS == "android" ? screenHeight * 0.005 : null,
                  fontSize: dimensionSetter({
                    mobile: screenHeight * 0.02,
                    tabPort: screenHeight * 0.02,
                    tabLand: screenHeight * 0.025,
                  }),
                },
              ]}
            >
              Available Credits: 2122.00
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "white",
              height: screenHeight * 0.25,
              paddingTop: screenHeight * 0.01,
              width: dimensionSetter({
                mobile: "90%",
                tabPort: "90%",
                tabLand: "80%",
              }),
            }}
          >
            <FlatList
              scrollEnabled
              data={credits}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.listItem,
                    {
                      height: screenHeight * 0.06,
                      marginVertical: screenHeight * 0.001,
                      marginHorizontal: screenWidth * 0.01,
                      paddingHorizontal: screenWidth * 0.05,
                    },
                  ]}
                >
                  <FAIcons name="circle" size={screenHeight * 0.01} />
                  <Text
                    style={{
                      color: Colors.primary,
                      fontFamily: "Poppins-Bold",
                      fontSize: screenHeight * 0.018,
                      paddingLeft: screenWidth * 0.03,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <FlatButton
            title="Buy"
            onPressed={() => props.setShowModal(false)}
            width={dimensionSetter({
              mobile: screenWidth * 0.8,
              tabPort: screenWidth * 0.6,
              tabLand: screenWidth * 0.3,
            })}
          />
          <View style={{ position: "absolute", top: "3%", right: "3%" }}>
            <MaterialIcons
              name="cancel"
              color={Colors.secondary}
              size={screenHeight * 0.04}
              onPress={() => props.setShowModal(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF8",
  },
  modal: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  tileView: {
    ...shadow,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  tileText: {
    color: "#084A5B",
    textAlignVertical: "center",
  },
  listItem: {
    ...shadow,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCF3F3",
  },
});
