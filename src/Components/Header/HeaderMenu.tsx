import { useState, useContext } from "react";
import { Text, View, FlatList } from "react-native";
import { Colors } from "../Constants/Colors";
import MenuIcon from "../../../assets/menu.svg";
import { DimensionsContext } from "../Contexts/DimensionsContext";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { useNavigation } from "@react-navigation/native";

export default function HeaderMenu() {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const menuItems = [
    "Campaign",
    "Profile",
    "Business Name",
    "Online Marketing",
    "Templates",
    "SMS Status",
    "Marketing History",
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
          width: dimensionSetter({
            mobile: "50%",
            tabPort: "30%",
            tabLand: "20%",
          }),
          position: "absolute",
          top: screenHeight * 0.13,
          right: screenWidth * 0.05,
        }}
      >
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={() => (
            <MenuDivider color={Colors.secondary} />
          )}
          renderItem={({ item }) => (
            <MenuItem
              onPress={() => {
                hideMenu();
                navigation.navigate(`${item}` as never);
              }}
            >
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: screenHeight * 0.02,
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
