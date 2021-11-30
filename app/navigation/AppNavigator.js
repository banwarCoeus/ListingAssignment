import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ContactsScreen from "../screens/ContactsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.CONTACTS} component={ContactsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
