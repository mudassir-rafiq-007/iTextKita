import React, { useEffect } from "react";
import * as Device from "expo-device";
import * as ScreenOrientation from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";
import Campaign from "./src/Screens/Campaign";
import DimensionsProvider from "./src/Components/Contexts/DimensionsContext";
import CustomerName from "./src/Screens/CustomerName";

const Stack = createNativeStackNavigator();

export default function App() {
  // const insets = useSafeAreaInsets()
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
    <DimensionsProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              animation: "none",
              animationDuration: 0,
            }}
          >
            <Stack.Screen
              name={"Login"}
              component={Login}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name={"SignUp"}
              component={SignUp}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name={"Campaign"}
              component={Campaign}
              options={{
                headerBackVisible: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name={"CustomerName"}
              component={CustomerName}
              options={{
                headerBackVisible: false,
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </DimensionsProvider>
  );
}
