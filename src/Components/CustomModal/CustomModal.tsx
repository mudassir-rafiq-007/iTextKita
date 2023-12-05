import {
  View,
  Modal,
  Platform,
  StyleProp,
  ViewStyle,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

interface propsType {
  screenHeight: number;
  modalVisible: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.JSX.Element | React.JSX.Element[] | null;
}

export default function CustomModal(props: propsType) {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={props.modalVisible}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View style={[styles.main, { height: props.screenHeight }]}>
            <View style={props.style}>{props.children}</View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff8",
  },
});
