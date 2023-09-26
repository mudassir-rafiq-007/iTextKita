import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuIcon from "../../../assets/menu.svg";
import ITextKita from "../../../assets/iTextKita.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Colors } from "../Constants/Colors";
import { deviceHeight, deviceWidth } from "../Constants/DeviceDimensions";

type propType = {
  title: string;
  screenWidth: number;
  screenHeight: number;
};

export default function Header(props: propType) {
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, { paddingTop: insets.top }]}>
      <ITextKita height={deviceHeight * 0.08} />
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <MenuIcon height={deviceHeight * 0.03} onPress={showMenu} />
      </View>

      <Menu visible={visible} onRequestClose={hideMenu} style={styles.menu}>
        <MenuItem onPress={hideMenu}>
          <Text style={{ color: Colors.primary }}>Campaign</Text>
        </MenuItem>
        <MenuDivider color={Colors.secondary} />
        <MenuItem onPress={hideMenu}>
          <Text style={{ color: Colors.primary }}>Business Name</Text>
        </MenuItem>
        <MenuDivider color={Colors.secondary} />
        <MenuItem onPress={hideMenu}>
          <Text style={{ color: Colors.primary }}>Online Marketing</Text>
        </MenuItem>
        <MenuDivider color={Colors.secondary} />
        <MenuItem onPress={hideMenu}>
          <Text style={{ color: Colors.primary }}>Templates</Text>
        </MenuItem>
        <MenuDivider color={Colors.secondary} />
        <MenuItem onPress={hideMenu}>
          <Text style={{ color: Colors.primary }}>SMS Status</Text>
        </MenuItem>
        <MenuDivider color={Colors.secondary} />
        <MenuItem onPress={hideMenu}>
          <Text style={{ color: Colors.primary }}>Marketing History</Text>
        </MenuItem>
        <MenuDivider color={Colors.secondary} />
        <MenuItem onPress={hideMenu}>
          <Text style={{ color: Colors.primary }}>Profile</Text>
        </MenuItem>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: deviceWidth * 0.05,
  },
  title: {
    color: "#084A5B",
    fontFamily: "Poppins-Bold",
    fontSize: deviceWidth * 0.06,
  },
  menu: {
    position: "absolute",
    top: deviceHeight * 0.13,
    right: deviceWidth * 0.05,
  },
});
