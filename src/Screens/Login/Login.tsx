import { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import InputFields from "./InputFields";
import ResetPassword from "../ResetPassword/ResetPassword";
import { Colors } from "../../Components/Constants/Colors";
import ITextKita from "../../../assets/images/iTextKita.svg";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import GradientView from "../../Components/GradientView/GradientView";
import OTPVerifyModal from "../../Components/OTPVerifyModal/OTPVerifyModal";
import NewUserRegistration from "../NewUserRegistration/NewUserRegistration";
import SuccessfulModal from "../../Components/SuccessfulModal/SuccessfulModal";
import NewStoreRegistration from "../NewStoreRegistration/NewStoreRegistration";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type loginProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

export default function Login(props: loginProps) {
  const { isMobile, fontRegular, isTabLandscape, valueFor } =
    useContext(DimensionsContext);
  const [showStoreMsg, setShowStoreMsg] = useState<boolean>(true);
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
      <InputFields />
      <View
        style={{
          zIndex: 2,
          alignItems: "flex-end",
          width: valueFor({
            mobile: moderateVerticalScale(270),
            tabPortrait: moderateVerticalScale(350),
            tabLandscape: moderateVerticalScale(330),
          }),
        }}
      >
        <TextButton
          zIndex={2}
          color={Colors.active}
          title="Reset Password"
          onPressed={() => setResetPasswordModal(true)}
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
      <OTPVerifyModal
        showModal={showResetPasswordOTPModal || showNewUserOTPModal}
        setShowModal={(value) => {
          if (value == "verify") {
            if (showResetPasswordOTPModal) {
              setShowResetPasswordOTPModal(false);
              setShowStoreMsg(false);
              setShowSuccussfulModal(true);
            } else if (showNewUserOTPModal) {
              setShowNewUserOTPModal(false);
              setShowNewStoreModal(true);
            }
          } else {
            setShowNewUserOTPModal(false);
            setShowResetPasswordOTPModal(false);
          }
        }}
      />
      <SuccessfulModal
        showModal={showSuccessfulModal}
        setShowModal={(value) => setShowSuccussfulModal(false)}
        message={
          showStoreMsg
            ? "We will send you an SMS once your branded SMS name has been created."
            : "You may now Login using new password."
        }
      />
      <FlatButton
        zIndex={2}
        title="Login"
        marginTop={moderateVerticalScale(50, 0.05)}
        width={valueFor({
          mobile: moderateVerticalScale(250),
          tabPortrait: moderateVerticalScale(300),
          tabLandscape: moderateVerticalScale(310),
        })}
        onPressed={() => props.navigation.navigate("Marketing")}
      />
      <View style={styles.registerView}>
        <Text
          style={{
            zIndex: 2,
            color: "#696969",
            fontFamily: fontRegular,
            fontSize: isMobile
              ? moderateVerticalScale(14)
              : moderateVerticalScale(11),
          }}
        >
          Don't Have Account?
        </Text>
        <TextButton
          zIndex={2}
          title="Register"
          color={Colors.active}
          onPressed={() => setShowNewUserModal(true)}
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
        <NewStoreRegistration
          originScreen="Login"
          modalVisible={showNewStoreModal}
          setShowModal={(value) => {
            if (value == "register") {
              setShowNewStoreModal(false);
              setShowStoreMsg(true);
              setShowSuccussfulModal(true);
            } else setShowNewStoreModal(false);
          }}
        />
      </View>
      <View style={{ zIndex: 2 }}>
        <TextButton
          zIndex={2}
          color={Colors.active}
          title="Terms & Conditions"
          onPressed={() => props.navigation.navigate("Terms")}
        />
      </View>
      <View style={styles.twoPersons}>
        <TwoPersons opacity={1} />
        <Text
          style={{
            color: "#fff",
            fontSize: isMobile
              ? moderateVerticalScale(10)
              : moderateVerticalScale(9),
          }}
        >
          Copyright © 2024 NTech IT Solutions Corp.
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: isMobile
              ? moderateVerticalScale(10)
              : moderateVerticalScale(9),
          }}
        >
          All Rights Reserved
        </Text>
      </View>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  registerView: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  twoPersons: {
    position: "absolute",
    alignItems: "center",
    bottom: moderateVerticalScale(14, 0.05),
  },
  brandText: {
    color: "#fff",
    fontSize: moderateVerticalScale(14, 0.05),
  },
});
