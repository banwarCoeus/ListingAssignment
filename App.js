import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import DatePickerScreen from "./app/screens/DatePickerScreen";

export default function App() {
  return (
    <DatePickerScreen />
    // <NavigationContainer theme={navigationTheme}>
    //   <DrawerNavigator />
    // </NavigationContainer>
  );
}
