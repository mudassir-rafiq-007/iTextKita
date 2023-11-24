import { useState, useContext } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import TwoPersonBg from "./TwoPersonBg";
import InputFields from "./InputFields";
import ResetPassword from "../ResetPassword/ResetPassword";
import ITextKita from "../../../assets/images/iTextKita.svg";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import SuccessfulModal from "../ResetPassword/SuccessfulModal";
import ThankyouModal from "../NewUserRegistration/ThankyouModal";
import NewUserOTPModal from "../NewUserRegistration/OTPVerifyModal";
import ResetPasswordOTPModal from "../ResetPassword/OTPVerifyModal";
import GradientView from "../../Components/GradientView/GradientView";
import NewUserRegistration from "../NewUserRegistration/NewUserRegistration";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import NewStoreRegistration from "../NewStoreRegistration/NewStoreRegistration";

type loginProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

export default function Login(props: loginProps) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);
  const [showThankModal, setShowThankModal] = useState<boolean>(false);
  const [showNewUserModal, setShowNewUserModal] = useState<boolean>(false);
  const [showNewStoreModal, setShowNewStoreModal] = useState<boolean>(false);
  const [resetPasswordModal, setResetPasswordModal] = useState<boolean>(false);
  const [showSuccessfulModal, setShowSuccussfulModal] =
    useState<boolean>(false);
  const [showNewUserOTPModal, setShowNewUserOTPModal] =
    useState<boolean>(false);
  const [showResetPasswordOTPModal, setShowResetPasswordOTPModal] =
    useState<boolean>(false);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1, height: screenHeight }}
    >
      <GradientView
        style={
          isTabLandscape
            ? [styles.container, { justifyContent: "flex-start" }]
            : styles.container
        }
      >
        <ITextKita
          height={dimensionSetter({
            mobile: screenHeight * 0.18,
            tabPort: screenHeight * 0.15,
            tabLand: screenHeight * 0.2,
          })}
          width={dimensionSetter({
            mobile: screenWidth * 0.6,
            tabPort: screenWidth * 0.5,
            tabLand: screenWidth * 0.3,
          })}
          style={{
            marginTop: dimensionSetter({
              mobile: screenHeight * 0.1,
              tabPort: screenHeight * 0.1,
              tabLand: screenHeight * 0.07,
            }),
          }}
        />
        <InputFields />
        <View style={{ zIndex: 2 }}>
          <TextButton
            zIndex={2}
            color="#696969"
            title="Reset Password"
            onPressed={() => setResetPasswordModal(true)}
            fontSize={dimensionSetter({
              mobile: screenWidth * 0.05,
              tabPort: screenWidth * 0.03,
              tabLand: screenWidth * 0.02,
            })}
            marginVertical={dimensionSetter({
              mobile: screenHeight * 0.03,
              tabPort: screenHeight * 0.03,
              tabLand: screenHeight * 0.02,
            })}
          />
        </View>
        <ResetPassword
          modalVisible={resetPasswordModal}
          setShowModal={(value) => {
            if (value == "submit") {
              setResetPasswordModal(false);
              setShowResetPasswordOTPModal(true);
            } else setResetPasswordModal(false);
          }}
        />
        <ResetPasswordOTPModal
          showModal={showResetPasswordOTPModal}
          setShowModal={(value) => {
            if (value == "verify") {
              setShowResetPasswordOTPModal(false);
              setShowSuccussfulModal(true);
            } else setShowResetPasswordOTPModal(false);
          }}
        />
        <SuccessfulModal
          showModal={showSuccessfulModal}
          setShowModal={(value) => setShowSuccussfulModal(false)}
        />
        <FlatButton
          title="Login"
          zIndex={2}
          onPressed={() => props.navigation.navigate("Marketing")}
          width={dimensionSetter({
            mobile: screenWidth * 0.8,
            tabPort: screenWidth * 0.6,
            tabLand: screenWidth * 0.3,
          })}
        />
        <View style={styles.registerView}>
          <Text
            style={{
              zIndex: 2,
              color: "#696969",
              fontFamily: fontRegular,
              fontSize: dimensionSetter({
                mobile: screenWidth * 0.035,
                tabPort: screenWidth * 0.025,
                tabLand: screenWidth * 0.015,
              }),
            }}
          >
            I Don't Have Account?
          </Text>
          <TextButton
            zIndex={2}
            title="Register"
            color="#008080"
            fontWeight="bold"
            onPressed={() => setShowNewUserModal(true)}
            fontSize={dimensionSetter({
              mobile: screenWidth * 0.035,
              tabPort: screenWidth * 0.025,
              tabLand: screenWidth * 0.015,
            })}
          />
          <NewUserRegistration
            modalVisible={showNewUserModal}
            setShowModal={(value) => {
              if (value == "next") {
                setShowNewUserModal(false);
                setShowNewUserOTPModal(true);
              } else setShowNewUserModal(false);
            }}
          />
          <NewUserOTPModal
            title="OTP Verify"
            showModal={showNewUserOTPModal}
            setShowModal={(value) => {
              if (value == "verify") {
                setShowNewUserOTPModal(false);
                setShowNewStoreModal(true);
              } else setShowNewUserOTPModal(false);
            }}
          />
          <NewStoreRegistration
            originScreen="Login"
            modalVisible={showNewStoreModal}
            setShowModal={(value) => {
              if (value == "register") {
                setShowNewStoreModal(false);
                setShowThankModal(true);
              } else setShowNewStoreModal(false);
            }}
          />
          <ThankyouModal
            showModal={showThankModal}
            setShowModal={() => setShowThankModal(false)}
          />
        </View>
        <View style={{ zIndex: 2 }}>
          <TextButton
            zIndex={2}
            color="#696969"
            title="Terms & Conditions"
            marginVertical={screenHeight * 0.01}
            onPressed={() => props.navigation.navigate("Terms")}
            fontSize={dimensionSetter({
              mobile: screenHeight * 0.015,
              tabPort: screenWidth * 0.02,
              tabLand: screenWidth * 0.012,
            })}
          />
        </View>
        <TwoPersonBg
          style={dimensionSetter({
            mobile: { alignItems: "center" },
            tabPort: { alignItems: "center" },
            tabLand: {
              zIndex: 1,
              position: "absolute",
              alignItems: "center",
              bottom: screenHeight * 0.01,
            },
          })}
        />
      </GradientView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#084A5B",
    textAlignVertical: "center",
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "#c7c6c5",
    justifyContent: "center",
    textAlignVertical: "center",
  },
  registerView: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
