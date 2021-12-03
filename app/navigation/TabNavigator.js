import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import routes from "./routes";
import OrganizationsScreen from "../screens/Tabs/OrganizationsScreen";
import Header from "../components/header/Header";
import Screen from "../components/Screen";
import GistsScreen from "../screens/Tabs/GistsScreen";
import ReposScreen from "../screens/Tabs/ReposScreen";
import colors from "../config/colors";

const TopTab = createMaterialTopTabNavigator();

const TabNavigator = ({ navigation }) => (
  <Screen>
    <Header
      title={"Tabs"}
      leftIconName={"menu"}
      showSearch={false}
      onLeftIconPress={() => navigation.toggleDrawer()}
    />
    <TopTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.purple,
        inactiveTintColor: colors.medium,
        indicatorStyle: { backgroundColor: colors.purple },
      }}
    >
      <TopTab.Screen
        name={routes.ORGANIZATION}
        component={OrganizationsScreen}
      />
      <TopTab.Screen name={routes.GISTS} component={GistsScreen} />
      <TopTab.Screen name={routes.REPOSITORIES} component={ReposScreen} />
    </TopTab.Navigator>
  </Screen>
);

export default TabNavigator;
