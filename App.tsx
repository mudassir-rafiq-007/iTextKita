import React, { useEffect } from "react";
import { LogBox, Platform } from "react-native";
import * as Device from "expo-device";
import * as ScreenOrientation from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Terms from "./src/Screens/Terms/Terms";
import Login from "./src/Screens/Login/Login";
import SignUp from "./src/Screens/SignUp/SignUp";
import Profile from "./src/Screens/Profile/Profile";
import Campaign from "./src/Screens/Campaign/Campaign";
import Templates from "./src/Screens/Templates/Templates";
import BusinessName from "./src/Screens/BusinessName/BusinessName";
import CustomerName from "./src/Screens/CustomerName/CustomerName";
import ResetPassword from "./src/Screens/ResetPassword/ResetPassword";
import RecentSMSStatus from "./src/Screens/RecentSMSStatus/RecentSMSStatus";
import OnlineMarketing from "./src/Screens/OnlineMarketing/OnlineMarketing";
import DimensionsProvider from "./src/Components/Contexts/DimensionsContext";
import MarketingHistory from "./src/Screens/MarketingHistory/MarketingHistory";

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
              name={"Reset Password"}
              component={ResetPassword}
              // options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name={"SignUp"}
              component={SignUp}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name={"Terms"}
              component={Terms}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen name={"Profile"} component={Profile} />
            <Stack.Screen name={"Campaign"} component={Campaign} />
            <Stack.Screen name={"Customer Name"} component={CustomerName} />
            <Stack.Screen name={"Business Name"} component={BusinessName} />
            <Stack.Screen
              name={"Marketing History"}
              component={MarketingHistory}
            />
            <Stack.Screen name={"Templates"} component={Templates} />
            <Stack.Screen
              name={"Online Marketing"}
              component={OnlineMarketing}
            />
            <Stack.Screen name={"SMS Status"} component={RecentSMSStatus} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </DimensionsProvider>
  );
}
