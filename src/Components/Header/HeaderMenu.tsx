import { useState, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Colors } from "../Constants/Colors";
import MenuIcon from "../../../assets/images/menu.svg";
import { DimensionsContext } from "../Contexts/DimensionsContext";

export default function HeaderMenu() {
  const { fontRegular } = useContext(DimensionsContext);

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
    "Stores",
  ];

  return (
    <View>
      <MenuIcon
        onPress={showMenu}
        width={moderateVerticalScale(20)}
        height={moderateVerticalScale(20)}
      />
      <Menu visible={visible} style={styles.menu} onRequestClose={hideMenu}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={() => (
            <View style={{ width: "100%" }}>
              <MenuDivider color={Colors.secondary} />
            </View>
          )}
          renderItem={({ item }) => (
            <MenuItem
              textStyle={{
                color: Colors.primary,
                fontFamily: fontRegular,
                width: moderateScale(200),
                fontSize: moderateVerticalScale(14),
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

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    width: moderateScale(200),
    right: moderateScale(20),
    top: moderateVerticalScale(100),
  },
});
