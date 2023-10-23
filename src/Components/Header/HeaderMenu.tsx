import { useState, useContext } from "react";
import { Text, View, FlatList } from "react-native";
import { Colors } from "../Constants/Colors";
import MenuIcon from "../../../assets/images/menu.svg";
import { useNavigation } from "@react-navigation/native";
import { DimensionsContext } from "../Contexts/DimensionsContext";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

export default function HeaderMenu() {
  const { screenWidth, screenHeight, fontFamily, dimensionSetter } =
    useContext(DimensionsContext);

  function menuWidth() {
    return dimensionSetter({
      mobile: screenWidth * 0.5,
      tabPort: screenWidth * 0.4,
      tabLand: screenWidth * 0.2,
    });
  }

  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const menuItems = [
    "Campaign",
    "Profile",
    "Business Name",
    "Customer Name",
    "Marketing History",
    "Templates",
    "Online Marketing",
    "SMS Status",
  ];

  return (
    <View>
      <MenuIcon
        height={dimensionSetter({
          mobile: screenHeight * 0.03,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.05,
        })}
        width={dimensionSetter({
          mobile: screenHeight * 0.03,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.05,
        })}
        onPress={showMenu}
      />
      <Menu
        visible={visible}
        onRequestClose={hideMenu}
        style={{
          width: menuWidth(),
          position: "absolute",
          top: screenHeight * 0.13,
          right: screenWidth * 0.05,
        }}
      >
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={() => (
            <View style={{ width: menuWidth() }}>
              <MenuDivider color={Colors.secondary} />
            </View>
          )}
          renderItem={({ item }) => (
            <MenuItem
              style={{ width: menuWidth() }}
              onPress={() => {
                hideMenu();
                navigation.navigate(`${item}` as never);
              }}
            >
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: screenHeight * 0.02,
                  fontFamily: fontFamily,
                }}
              >
                {item}
              </Text>
            </MenuItem>
          )}
        />
      </Menu>
    </View>
  );
}
