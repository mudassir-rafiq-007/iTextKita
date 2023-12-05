import { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";
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
  const { fontRegular, isTabLandscape, isTabPortrait } = useContext(DimensionsContext);
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
      <View
        // enableOnAndroid={true}
        style={{ flexGrow: 1, alignItems: "center" }}
      >
        <ITextKita
          height={
            isTabLandscape
              ? moderateVerticalScale(100)
              : moderateVerticalScale(100)
          }
          style={{
            marginTop: isTabLandscape
              ? moderateVerticalScale(25)
              : moderateVerticalScale(50),
            marginBottom: isTabLandscape
              ? moderateVerticalScale(25)
              : moderateVerticalScale(25),
          }}
        />
        <InputFields />
        <View style={{ zIndex: 2, 
          // backgroundColor:"pink", 
          alignItems: "flex-end",
          // height: (isTabPortrait ? moderateScale(60, 0.5):(isTabLandscape ? moderateScale(330, 0.5): moderateScale(270,0.5))),
          width:(isTabPortrait ? moderateVerticalScale(350, 0.5):(isTabLandscape ? moderateVerticalScale(330, 0.5): moderateVerticalScale(270,0.5))) }}>
          <TextButton
            zIndex={2}
            color="#3389FF"
            title="Reset Password"
            // marginVertical={moderateVerticalScale(15)}
            fontSize={(isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5)))}
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
          width={(isTabPortrait ? moderateVerticalScale(300, 0.5):(isTabLandscape ? moderateVerticalScale(310, 0.5): moderateVerticalScale(250,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          marginTop={moderateVerticalScale(50, 0.05)}
          onPressed={() => props.navigation.navigate("Marketing")}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
        <View style={styles.registerView}>
          <Text
            style={{
              zIndex: 2,
              color: "#696969",
              // fontFamily: fontRegular,
              fontSize: (isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))),
            }}
          >
            Don't Have Account?
          </Text>
          <TextButton
            zIndex={2}
            title="Register"
            color="#3389FF"
            fontSize= {(isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5)))}
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
            color="#3389FF"
            title="Terms & Conditions"
            fontSize={(isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5)))}
            onPressed={() => props.navigation.navigate("Terms")}
          />
        </View>
        <View
          style={[
            styles.twoPersons,
            // { gap: isTabLandscape ? moderateVerticalScale(-30,0.05) : null },
          ]}
        >
          <TwoPersons opacity={ 1} />
          <Text style={{color:"#fff", fontSize:(isTabPortrait ? moderateVerticalScale(9, 0.5):(isTabLandscape ? moderateVerticalScale(9, 0.5): moderateVerticalScale(10,0.5)))}}>Copyright © 2024 NTech IT Solutions Corp.</Text>
          <Text style={{color:"#fff", fontSize:(isTabPortrait ? moderateVerticalScale(9, 0.5):(isTabLandscape ? moderateVerticalScale(9, 0.5): moderateVerticalScale(10,0.5)))}}>All Rights Reserved</Text>
        </View>
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
