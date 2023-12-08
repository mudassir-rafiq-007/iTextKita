import React, { createContext, useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import * as Device from "expo-device";
import * as Screen from "expo-screen-orientation";
import { deviceHeight, deviceWidth } from "../Constants/DeviceDimensions";

type dimensionSetterProp = {
  mobile: any;
  tabPortrait: any;
  tabLandscape: any;
};

type DimensionsContextType = {
  fontBold: string | undefined;
  fontRegular: string | undefined;
  screenWidth: number;
  screenHeight: number;
  isTab: boolean | undefined;
  isMobile: boolean | undefined;
  isTabPortrait: boolean | undefined;
  isTabLandscape: boolean | undefined;
  valueFor: ({}: dimensionSetterProp) => any;
};

export const DimensionsContext = createContext<DimensionsContextType>({
  isTabPortrait: undefined,
  isMobile: undefined,
  isTab: undefined,
  isTabLandscape: undefined,
  screenHeight: deviceHeight,
  screenWidth: deviceWidth,
  fontBold: undefined,
  fontRegular: undefined,
  valueFor({}) {},
});

interface propsType {
  children: JSX.Element;
}

export default function DimensionsProvider(props: propsType) {
  const [counter, setCounter] = useState<number>(0);
  const [isTab, setIsTab] = useState<boolean>();
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isTabPortrait, setIsTabPortrait] = useState<boolean>();
  const [isTabLandscape, setIsTabLandscape] = useState<boolean>();
  const [screenWidth, setScreenWidth] = useState<number>(deviceWidth);
  const [screenHeight, setScreenHeight] = useState<number>(deviceHeight);

  // Selects value based on screen orientation
  function valueFor({
    mobile,
    tabPortrait,
    tabLandscape,
  }: dimensionSetterProp) {
    if (isMobile) {
      return mobile;
    } else if (isTabPortrait) {
      return tabPortrait;
    } else if (isTabLandscape) {
      return tabLandscape;
    }
  }

  async function checkDeviceOrientation() {
    const deviceType = await Device.getDeviceTypeAsync();
    if (deviceType == 1) setIsMobile(true);
    if (deviceType == 2) {
      setIsTab(true);
      const orientation = await Screen.getOrientationAsync();
      if (orientation == 1 || orientation == 2) {
        setIsTabPortrait(true);
        setIsTabLandscape(false);
      } else {
        setIsTabLandscape(true);
        setIsTabPortrait(false);
      }
    }
  }

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (counter == 0) {
      checkDeviceOrientation();
      setCounter(1);
    }
    // Added listener to keep listening for Tablet's orientation
    Dimensions.addEventListener("change", ({ window }) => {
      setScreenHeight(window.height);
      setScreenWidth(window.width);
      checkDeviceOrientation();
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <DimensionsContext.Provider
      value={{
        isTab,
        isMobile,
        screenWidth,
        screenHeight,
        isTabPortrait,
        isTabLandscape,
        fontBold: "Poppins-Bold",
        fontRegular: "Poppins-Regular",
        valueFor,
      }}
    >
      {props.children}
    </DimensionsContext.Provider>
  );
}
