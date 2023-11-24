import React, { useEffect } from "react";
import { LogBox, Platform } from "react-native";
import * as Device from "expo-device";
import * as ScreenOrientation from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Terms from "./src/Screens/Terms/Terms";
import Login from "./src/Screens/Login/Login";
import Header from "./src/Components/Header/Header";
import Marketing from "./src/Screens/Marketing/Marketing";
import Profile from "./src/Screens/Profile/AccountProfile";
import BusinessName from "./src/Screens/BusinessName/BusinessName";
import CreateCampaign from "./src/Screens/CampaignMaterials/CreateCampaign";
import RecentSMSStatus from "./src/Screens/RecentSMSStatus/RecentSMSStatus";
import DimensionsProvider from "./src/Components/Contexts/DimensionsContext";
import MarketingHistory from "./src/Screens/MarketingHistory/MarketingHistory";
import CampaignMaterials from "./src/Screens/CampaignMaterials/CampaignMaterials";
import PlanDetails from "./src/Screens/Profile/UserDetails/ActivePlan/PlanDetails";
import PurchaseCredits from "./src/Screens/Profile/AvailableCredits/AddMore/PurchaseCredits";
import StoreInformation from "./src/Screens/Profile/StoreDetails/StoreInformation/StoreInformation";
import PackagePlans from "./src/Screens/Profile/UserDetails/ActivePlan/UpgradePackage/PackagePlans";

LogBox.ignoreLogs([
  "new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.",
  "new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.",
]);

const Stack = createNativeStackNavigator();

export default function App() {
  async function lockMobileOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  }

  async function checkForMobile() {
    if (Platform.OS == "ios") {
      if (Platform.isPad == false) {
        // This is for mobile devices. Following code will lock it orientation from changing
        lockMobileOrientation();
      }
    } else {
      const deviceType = await Device.getDeviceTypeAsync();
      if (deviceType == 1) {
        // This is for mobile devices. Following code will lock it orientation from changing
        lockMobileOrientation();
      }
    }
  }

  useEffect(() => {
    checkForMobile();
  }, []);
  return (
    <DimensionsProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              animation: "none",
              animationDuration: 0,
              headerBackVisible: false,
            }}
          >
            <Stack.Screen
              name={"Login"}
              component={Login}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name={"Terms"}
              component={Terms}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name={"Marketing"}
              component={Marketing}
              options={{
                header: () => <Header title="Marketing" />,
              }}
            />
            <Stack.Screen
              name={"Profile"}
              component={Profile}
              options={{
                header: () => <Header title="Account Profile" />,
              }}
            />
            <Stack.Screen
              name={"Plan Details"}
              component={PlanDetails}
              options={{
                header: (props) => (
                  <Header
                    title="Plan Details"
                    showBackButton={true}
                    goBack={props.navigation.goBack}
                  />
                ),
              }}
            />
            <Stack.Screen
              name={"Package Plans"}
              component={PackagePlans}
              options={{
                header: (props) => (
                  <Header
                    title="Package Plans"
                    showBackButton={true}
                    goBack={props.navigation.goBack}
                  />
                ),
              }}
            />
            <Stack.Screen
              name={"Purchase Credits"}
              component={PurchaseCredits}
              options={{
                header: (props) => (
                  <Header
                    title="Purchase Credits"
                    showBackButton={true}
                    goBack={props.navigation.goBack}
                  />
                ),
              }}
            />
            <Stack.Screen
              name={"Store Information"}
              component={StoreInformation}
              options={{
                header: (props) => (
                  <Header
                    title="Store Information"
                    showBackButton={true}
                    goBack={props.navigation.goBack}
                  />
                ),
              }}
            />
            <Stack.Screen
              name={"Business Name"}
              component={BusinessName}
              options={{
                header: () => <Header title="Business Name" />,
              }}
            />
            <Stack.Screen
              name={"Marketing History"}
              component={MarketingHistory}
              options={{
                header: () => <Header title="Marketing History" />,
              }}
            />
            <Stack.Screen
              name={"Campaign Materials"}
              component={CampaignMaterials}
              options={{
                header: () => <Header title="Campaign Materials" />,
              }}
            />
            <Stack.Screen
              name={"Create Campaign"}
              component={CreateCampaign}
              options={{
                header: (props) => (
                  <Header
                    title="Create Campaign"
                    showBackButton={true}
                    goBack={props.navigation.goBack}
                  />
                ),
              }}
            />
            <Stack.Screen
              name={"SMS Status"}
              component={RecentSMSStatus}
              options={{
                header: () => <Header title="Recent SMS Status" />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </DimensionsProvider>
  );
}
