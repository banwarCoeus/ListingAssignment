import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import ContactsScreen from "../screens/ContactsScreen";
import routes from "./routes";
import UserDetailScreen from "../screens/UserDetailScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, stackPresentation: "formSheet" }}
  >
    <Stack.Screen name={routes.CONTACTS} component={ContactsScreen} />
    <Stack.Screen name={routes.USER_DETAILS} component={UserDetailScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
