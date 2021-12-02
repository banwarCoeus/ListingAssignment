import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import colors from "../config/colors";

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerConatiner}>
        <Image
          // @ts-ignore
          source={require("../assets/coeusLogo.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={styles.headerTitle}>Coeus Solutions</Text>
        <Text style={styles.headerSubTitle}>Software House</Text>
        <View style={styles.iconsContainer}>
          <MaterialCommunityIcons name="heart" color={"white"} size={21} />
          <MaterialCommunityIcons name="apps" color={"white"} size={21} />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerConatiner: {
    width: "100%",
    height: 250,
    marginTop: -(Constants.statusBarHeight + 5),
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.purple,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontWeight: "600",
    marginVertical: 5,
    fontSize: 18,
  },
  headerSubTitle: { color: "white", fontWeight: "400" },
  iconsContainer: {
    flexDirection: "row",
    marginVertical: 5,
    width: 55,
    justifyContent: "space-between",
  },
});

export default CustomDrawer;
