import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import AntDesignIcons from "react-native-vector-icons/AntDesign";

export default function CampaignDetail({
  item,
}: {
  item: { key: string; value: string | number };
}) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [showMessage, setShowMessage] = useState<boolean>(false);
  return (
    <View style={{ marginVertical: screenHeight * 0.005 }}>
      {item.key == "Message" ? (
        <View>
          <TouchableOpacity
            onPress={() => setShowMessage(!showMessage)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: fontRegular,
                fontSize: screenHeight * 0.02,
              }}
            >
              {item.key}
            </Text>
            <AntDesignIcons
              name={showMessage ? "up" : "down"}
              color={"white"}
              size={screenHeight * 0.03}
            />
          </TouchableOpacity>
          {showMessage && (
            <View
              style={{
                backgroundColor: "#FFF3",
                padding: screenHeight * 0.02,
                marginTop: screenHeight * 0.01,
                borderRadius: screenHeight * 0.01,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "justify",
                  fontFamily: fontRegular,
                  fontSize: screenHeight * 0.02,
                }}
              >
                {item.value}
              </Text>
            </View>
          )}
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: fontRegular,
              fontSize: screenHeight * 0.02,
            }}
          >
            {item.key}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: fontRegular,
              fontSize: screenHeight * 0.02,
            }}
          >
            {item.value}
          </Text>
        </View>
      )}
    </View>
  );
}
