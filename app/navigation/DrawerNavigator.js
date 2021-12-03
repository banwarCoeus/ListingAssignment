import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import AppNavigator from "./AppNavigator";
import colors from "../config/colors";
import CustomDrawer from "./CustomDrawer";
import AboutScreen from "../screens/AboutScreen";
import TabsScreen from "../screens/TabsScreen";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.purple,
        activeBackgroundColor: colors.white,
      }}
      screenOptions={{
        swipeEnabled: false,
      }}
      drawerType={"slide"}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={AppNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={21} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={21} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tab Screen"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="tab" size={21} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
