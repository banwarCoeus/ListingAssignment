import React from "react";
import { Text, View } from "react-native";
import Header from "../components/header/Header";
import Screen from "../components/Screen";

export default class TabsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Screen>
        <Header
          title={"Tabs"}
          leftIconName={"menu"}
          showSearch={false}
          onLeftIconPress={() => this.props.navigation.toggleDrawer()}
        />
        <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
      </Screen>
    );
  }
}
