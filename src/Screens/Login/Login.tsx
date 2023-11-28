import { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputFields from "./InputFields";
import ResetPassword from "../ResetPassword/ResetPassword";
import ITextKita from "../../../assets/images/iTextKita.svg";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import SuccessfulModal from "../ResetPassword/SuccessfulModal";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
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
  const { fontRegular, isTabLandscape } = useContext(DimensionsContext);
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
    <GradientView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      >
        <ITextKita
          height={
            isTabLandscape
              ? moderateVerticalScale(60)
              : moderateVerticalScale(100)
          }
          style={{
            marginTop: isTabLandscape
              ? moderateVerticalScale(50)
              : moderateVerticalScale(100),
          }}
        />
        <InputFields />
        <View style={{ zIndex: 2 }}>
          <TextButton
            zIndex={2}
            color="#696969"
            title="Reset Password"
            marginVertical={moderateVerticalScale(15)}
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
          zIndex={2}
          title="Login"
          width={moderateScale(280)}
          onPressed={() => props.navigation.navigate("Marketing")}
        />
        <View style={styles.registerView}>
          <Text
            style={{
              zIndex: 2,
              color: "#696969",
              fontFamily: fontRegular,
              fontSize: moderateVerticalScale(12),
            }}
          >
            I Don't Have Account?
          </Text>
          <TextButton
            zIndex={2}
            title="Register"
            color="#008080"
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
            fontSize={moderateVerticalScale(10)}
            onPressed={() => props.navigation.navigate("Terms")}
          />
        </View>
        <View
          style={[
            styles.twoPersons,
            { gap: isTabLandscape ? moderateVerticalScale(10) : null },
          ]}
        >
          <TwoPersons opacity={isTabLandscape ? 0.7 : 1} />
          <Text style={styles.brandText}>ⓒ & 2023 NTech Corp.</Text>
        </View>
      </KeyboardAwareScrollView>
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
    bottom: moderateVerticalScale(20),
  },
  brandText: {
    color: "#fff",
    fontSize: moderateVerticalScale(14),
  },
});
