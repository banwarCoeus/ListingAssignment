import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import ColorPickerScreen from "./app/screens/ColorPickerScreen";

export default function App() {
  return (
    <ColorPickerScreen />
    // <NavigationContainer theme={navigationTheme}>
    //   <DrawerNavigator />
    // </NavigationContainer>
  );
}
