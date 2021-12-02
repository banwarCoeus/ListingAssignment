import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import routes from "./routes";
import OrganizationsScreen from "../screens/Tabs/OrganizationsScreen";
import Header from "../components/header/Header";
import Screen from "../components/Screen";
import GistsScreen from "../screens/Tabs/GistsScreen";
import ReposScreen from "../screens/Tabs/ReposScreen";

const TopTab = createMaterialTopTabNavigator();

const TabNavigator = ({ navigation }) => (
  <Screen>
    <Header
      title={"Tabs"}
      leftIconName={"menu"}
      showSearch={false}
      onLeftIconPress={() => navigation.toggleDrawer()}
    />
    <TopTab.Navigator>
      <TopTab.Screen name={"Organization"} component={OrganizationsScreen} />
      <TopTab.Screen name={"Gists"} component={GistsScreen} />
      <TopTab.Screen name={"Repositories"} component={ReposScreen} />
    </TopTab.Navigator>
  </Screen>
);

export default TabNavigator;
