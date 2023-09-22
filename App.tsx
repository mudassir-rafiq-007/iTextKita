import React, { useEffect } from "react";
import * as Device from "expo-device";
import * as ScreenOrientation from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    (async () => {
      const deviceType = await Device.getDeviceTypeAsync();
      if (deviceType == 1) {
        // This is for mobile devices. Following code will lock it orientation from changing
        (async () =>
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT
          ))();
      }
    })();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animation: "none",
          animationDuration: 0,
        }}
      >
        <Stack.Screen name={"Login"} component={Login}></Stack.Screen>
        <Stack.Screen name={"SignUp"} component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
