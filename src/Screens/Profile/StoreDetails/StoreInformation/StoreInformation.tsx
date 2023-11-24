import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import UsersList from "./UsersList";
import ExpiryDate from "./ExpiryDate";
import StoreDetails from "./StoreDetails";
import SubscribePage from "./SubscribePage";
import AddNewUser from "./AddNewUser/AddNewUser";
import Header from "../../../../Components/Header/Header";
import FlatButton from "../../../../Components/Buttons/FlatButton";
import TwoPersons from "../../../../Components/TwoPersons/TwoPersons";
import GradientView from "../../../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
  route: RouteProp<{ params: { storeName: string } }, "params">;
};

export default function StoreInformation(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [showNewUserModal, setShowNewUserModal] = useState<boolean>(false);

  const storeName = props.route.params.storeName;

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title={storeName} />,
    });
  }, []);

  return (
    <GradientView
      style={[
        styles.main,
        {
          flexDirection: isTabLandscape ? "row" : null,
          gap: isTabLandscape ? null : screenHeight * 0.03,
          alignItems: isTabLandscape ? "flex-start" : "center",
          justifyContent: isTabLandscape ? "space-around" : null,
        },
      ]}
    >
      <View
        style={{
          zIndex: 2,
          alignItems: "center",
          width: isTabLandscape ? "50%" : "100%",
          gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
        }}
      >
        <StoreDetails
          storeName={storeName}
          navigate={props.navigation.navigate}
        />
        <ExpiryDate />
        <SubscribePage />
        {isTabLandscape && (
          <FlatButton
            title="Log Out"
            onPressed={() => props.navigation.navigate("Login")}
            width={dimensionSetter({
              mobile: "90%",
              tabPort: "70%",
              tabLand: "60%",
            })}
          />
        )}
      </View>
      <View
        style={{
          zIndex: 2,
          alignItems: "center",
          width: isTabLandscape ? "50%" : "100%",
          gap: isTabLandscape ? screenHeight * 0.07 : screenHeight * 0.01,
        }}
      >
        <UsersList />
        <View
          style={{
            alignItems: "center",
            width: dimensionSetter({
              mobile: "90%",
              tabPort: "70%",
              tabLand: "60%",
            }),
          }}
        >
          <FlatButton
            title="Add New User"
            onPressed={() => setShowNewUserModal(true)}
            width={isTabLandscape ? "90%" : "100%"}
            marginVertical={isTabLandscape ? null : screenHeight * 0.02}
          />
        </View>
        <AddNewUser
          modalVisible={showNewUserModal}
          setShowModal={() => setShowNewUserModal(false)}
        />
      </View>
      <TwoPersons style={styles.twoPersons} />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: "4%",
    borderTopWidth: 1,
    alignItems: "center",
    borderColor: "#0003",
    backgroundColor: "white",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
