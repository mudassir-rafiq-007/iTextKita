import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import TwoPersons from "../../../assets/images/bgt.svg";
import Header from "../../Components/Header/Header";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

interface selcted {
  key: number;
  customer: string;
  isSelected: boolean;
}

export default function CustomerName(props: propsType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const [customers, setCustomers] = useState<selcted[]>([
    { key: 1, customer: "David H.", isSelected: false },
    { key: 2, customer: "Jerry", isSelected: false },
    { key: 3, customer: "Elaine", isSelected: false },
    { key: 4, customer: "George", isSelected: false },
    { key: 5, customer: "Ross", isSelected: false },
    { key: 6, customer: "Rachel", isSelected: false },
    { key: 7, customer: "Jesse", isSelected: false },
    { key: 8, customer: "Walter", isSelected: false },
  ]);

  function onSelect(selectedCustomer: selcted) {
    const tempData: selcted[] = [];
    if (customers.length) {
      customers.map((customer) => {
        if (customer.key == selectedCustomer.key) {
          if (customer.isSelected) {
            customer.isSelected = false;
            tempData.push(customer);
          } else {
            customer.isSelected = true;
            tempData.push(customer);
          }
        } else {
          if (customer.isSelected) {
            tempData.push(customer);
          } else {
            customer.isSelected = false;
            tempData.push(customer);
          }
        }
      });
      setCustomers(tempData);
    }
  }

  function onReset() {
    const tempData: selcted[] = [];
    if (customers.length) {
      customers.map((customer) => {
        customer.isSelected = false;
        tempData.push(customer);
      });
      setCustomers(tempData);
    }
  }

  function onSelectAll() {
    const tempData: selcted[] = [];
    if (customers.length) {
      customers.map((customer) => {
        customer.isSelected = true;
        tempData.push(customer);
      });
      setCustomers(tempData);
    }
  }

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="CUSTOMER NAME" />,
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      locations={[0.5, 1]}
      style={[
        styles.container,
        {
          gap: screenHeight * 0.03,
          justifyContent: dimensionSetter({
            mobile: "center",
            tabPort: "center",
            tabLand: "flex-start",
          }),
        },
      ]}
      colors={["#FFFFFF", "#008080"]}
    >
      <View
        style={{
          zIndex: 2,
          borderWidth: 2,
          borderColor: "#dedddc",
          width: dimensionSetter({
            mobile: screenWidth * 0.9,
            tabPort: screenWidth * 0.7,
            tabLand: screenWidth * 0.4,
          }),
          height: screenHeight * 0.3,
          backgroundColor: "#dedddc",
        }}
      >
        <FlatList
          scrollEnabled
          data={customers}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => onSelect(item)}
                style={{
                  elevation: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: item.isSelected ? Colors.primary : "white",
                  height: screenHeight * 0.06,
                  marginVertical: screenHeight * 0.001,
                  marginHorizontal: screenWidth * 0.01,
                }}
              >
                <Text
                  style={{
                    color: item.isSelected ? "white" : Colors.primary,
                    fontFamily: "Poppins-Bold",
                    fontSize: screenHeight * 0.02,
                  }}
                >
                  {item.customer}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          zIndex: 2,
          alignItems: "center",
          justifyContent: "center",
          gap: screenHeight * 0.02,
        }}
      >
        <View
          style={{
            width: dimensionSetter({
              mobile: screenWidth * 0.9,
              tabPort: screenWidth * 0.7,
              tabLand: screenWidth * 0.4,
            }),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <FlatButton
            title="Select All"
            onPressed={onSelectAll}
            width={dimensionSetter({
              mobile: screenWidth * 0.4,
              tabPort: screenWidth * 0.3,
              tabLand: screenWidth * 0.15,
            })}
          />
          <FlatButton
            title="Reset"
            onPressed={onReset}
            width={dimensionSetter({
              mobile: screenWidth * 0.4,
              tabPort: screenWidth * 0.3,
              tabLand: screenWidth * 0.15,
            })}
          />
        </View>
        <FlatButton
          title="Apply"
          onPressed={() => {}}
          width={dimensionSetter({
            mobile: screenWidth * 0.8,
            tabPort: screenWidth * 0.6,
            tabLand: screenWidth * 0.2,
          })}
        />
      </View>
      <View
        style={[
          styles.twoPersons,
          {
            bottom: dimensionSetter({
              mobile: screenHeight * 0.05,
              tabPort: screenHeight * 0.03,
              tabLand: screenHeight * 0.001,
            }),
          },
        ]}
      >
        <TwoPersons
          height={dimensionSetter({
            mobile: screenHeight * 0.2,
            tabPort: screenHeight * 0.3,
            tabLand: screenHeight * 0.6,
          })}
          width={screenWidth * 0.8}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
