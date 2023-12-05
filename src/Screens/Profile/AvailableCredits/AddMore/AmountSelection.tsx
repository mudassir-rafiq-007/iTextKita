import { useContext, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Colors } from "../../../../Components/Constants/Colors";
import FlatButton from "../../../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../../../Components/Contexts/DimensionsContext";

interface creditAmountType {
  id: number;
  amount: string;
  isSelected: boolean;
}

export default function AmountSelection() {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [creditAmounts, setCreditAmounts] = useState<creditAmountType[]>([
    { id: 1, amount: "1000", isSelected: false },
    { id: 2, amount: "2000", isSelected: false },
    { id: 3, amount: "3000", isSelected: false },
    { id: 4, amount: "4000", isSelected: false },
    { id: 5, amount: "5000", isSelected: false },
    { id: 6, amount: "6000", isSelected: false },
  ]);

  function handleSelection(selectedItem: creditAmountType) {
    let tempData: creditAmountType[] = [];
    creditAmounts.map((creditAmount) => {
      if (creditAmount.id == selectedItem.id) {
        if (creditAmount.isSelected) {
          creditAmount.isSelected = false;
          tempData.push(creditAmount);
        } else {
          creditAmount.isSelected = true;
          tempData.push(creditAmount);
        }
      } else {
        if (creditAmount.isSelected) {
          creditAmount.isSelected = false;
          tempData.push(creditAmount);
        } else tempData.push(creditAmount);
      }
    });
    setCreditAmounts(tempData);
  }

  return (
    <View
      style={{
        zIndex: 2,
        gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.01,
        height: isTabLandscape ? screenHeight * 0.6 : screenHeight * 0.25,
        width: dimensionSetter({
          mobile: "100%",
          tabPort: "75%",
          tabLand: "40%",
        }),
      }}
    >
      <Text
        style={{
          marginLeft: "3%",
          color: Colors.primary,
          fontSize: screenHeight * 0.02,
          fontFamily: isTabLandscape ? fontBold : fontRegular,
        }}
      >
        Choose Your Credit Amount
      </Text>
      <FlatList
        data={creditAmounts}
        numColumns={isTabLandscape ? 2 : 3}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          alignSelf: "center",
          width: isTabLandscape ? "100%" : "95%",
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelection(item)}
            style={{
              flex: 1,
              paddingLeft: "5%",
              justifyContent: "center",
              backgroundColor: "#f7f7f7",
              borderRadius: screenHeight * 0.01,
              margin: isTabLandscape ? "2%" : "1%",
              borderWidth: item.isSelected ? 2 : null,
              gap: isTabLandscape ? screenHeight * 0.02 : null,
              borderColor: item.isSelected ? Colors.secondary : null,
              height: isTabLandscape
                ? screenHeight * 0.13
                : screenHeight * 0.08,
            }}
          >
            <Text
              style={{
                color: "#a3a3a3",
                fontFamily: fontRegular,
                fontSize: isTabLandscape
                  ? screenHeight * 0.02
                  : screenHeight * 0.015,
              }}
            >
              Credit
            </Text>
            <Text
              style={{
                fontFamily: fontBold,
                color: Colors.secondary,
                fontSize: isTabLandscape
                  ? screenHeight * 0.03
                  : screenHeight * 0.025,
              }}
            >
              {item.amount}
            </Text>
          </TouchableOpacity>
        )}
      />
      {isTabLandscape && (
        <FlatButton
          zIndex={2}
          onPressed={() => {}}
          title="Pay Now (4.99$)"
          width={isTabLandscape ? "100%" : null}
        />
      )}
    </View>
  );
}
