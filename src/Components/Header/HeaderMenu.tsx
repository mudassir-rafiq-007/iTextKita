import { useState, useContext } from "react";
import { Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Colors } from "../Constants/Colors";
import MenuIcon from "../../../assets/images/menu.svg";
import { DimensionsContext } from "../Contexts/DimensionsContext";

export default function HeaderMenu() {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  function menuWidth() {
    return dimensionSetter({
      mobile: screenWidth * 0.6,
      tabPort: screenWidth * 0.4,
      tabLand: screenWidth * 0.2,
    });
  }

  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const menuItems = [
    "Marketing",
    "Profile",
    "Business Name",
    "Marketing History",
    "Campaign Materials",
    "SMS Status",
  ];

  return (
    <View>
      <MenuIcon
        onPress={showMenu}
        width={isTabLandscape ? screenHeight * 0.05 : screenHeight * 0.03}
        height={isTabLandscape ? screenHeight * 0.05 : screenHeight * 0.03}
      />
      <Menu
        visible={visible}
        onRequestClose={hideMenu}
        style={{
          width: menuWidth(),
          position: "absolute",
          right: screenWidth * 0.05,
          top: dimensionSetter({
            mobile: screenHeight * 0.13,
            tabPort: screenHeight * 0.15,
            tabLand: screenHeight * 0.22,
          }),
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
              textStyle={{
                width: menuWidth(),
                color: Colors.primary,
                fontFamily: fontRegular,
                fontSize: screenHeight * 0.02,
              }}
              onPress={() => {
                hideMenu();
                navigation.navigate(`${item}` as never);
              }}
            >
              {item}
            </MenuItem>
          )}
        />
      </Menu>
    </View>
  );
}
