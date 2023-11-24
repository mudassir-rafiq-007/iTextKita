import { useState, useContext } from "react";
import { Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Colors } from "../Constants/Colors";
import MenuIcon from "../../../assets/images/menu.svg";
import { DimensionsContext } from "../Contexts/DimensionsContext";

export default function HeaderMenu() {
  const { screenWidth, screenHeight, fontRegular, fontBold, dimensionSetter } =
    useContext(DimensionsContext);

  function menuWidth() {
    return dimensionSetter({
      mobile: screenWidth * 0.6,
      tabPort: screenWidth * 0.5,
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
                  fontFamily: fontRegular,
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
