import React, { createContext, useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { deviceHeight, deviceWidth } from "../Constants/DeviceDimensions";
import * as Screen from "expo-screen-orientation";
import * as Device from "expo-device";

type dimensionSetterProp = {
  mobile: any;
  tabPort: any;
  tabLand: any;
};

type DimensionsContextType = {
  isTabPortrait: boolean | undefined;
  isTabLandscape: boolean | undefined;
  screenHeight: number;
  screenWidth: number;
  dimensionSetter: ({}: dimensionSetterProp) => any
};

export const DimensionsContext = createContext<DimensionsContextType>({
  isTabPortrait: undefined,
  isTabLandscape: undefined,
  screenHeight: deviceHeight,
  screenWidth: deviceWidth,
  dimensionSetter({ }) {},
});

interface propsType {
  children: JSX.Element;
}

export default function DimensionsProvider(props: propsType) {
  const [counter, setCounter] = useState<number>(0);
  const [isTabPortrait, setIsTabPortrait] = useState<boolean>();
  const [isTabLandscape, setIsTabLandscape] = useState<boolean>();
  const [screenHeight, setScreenHeight] = useState<number>(deviceHeight);
  const [screenWidth, setScreenWidth] = useState<number>(deviceWidth);

  // Selects value based on screen orientation
  function dimensionSetter({ mobile, tabPort, tabLand }: dimensionSetterProp) {
    if (isTabPortrait) {
      return tabPort;
    } else if (isTabLandscape) {
      return tabLand;
    } else if (!isTabLandscape && !isTabPortrait) {
      return mobile;
    }
  }

  async function deviceOrientation() {
    const deviceType = await Device.getDeviceTypeAsync();
    if (deviceType == 2) {
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

  useEffect(() => {
    if (counter == 0) {
      deviceOrientation();
      setCounter(1);
    }
    // Added listener to keep track of Tablet's orientation
    Dimensions.addEventListener("change", ({ window }) => {
      setScreenHeight(window.height);
      setScreenWidth(window.width);
      deviceOrientation();
    });
  }, []);

  return (
    <DimensionsContext.Provider
      value={{
        screenWidth,
        screenHeight,
        isTabPortrait,
        isTabLandscape,
        dimensionSetter
      }}
    >
      {props.children}
    </DimensionsContext.Provider>
  );
}
