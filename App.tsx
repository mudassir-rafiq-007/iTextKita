import React, { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import { deviceHeight, deviceWidth } from "./src/Components/Constants";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    if (deviceWidth <= 450 || deviceHeight <= 450) {
      // This is for mobile devices. Following code will lock it orientation from changing
      (async () =>
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT
        ))();
    }
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Login"} component={Login}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
