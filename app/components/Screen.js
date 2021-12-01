import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.statusBarColor || "white" },
        ]}
      >
        <StatusBar
          backgroundColor={this.props.statusBarColor || "white"}
          barStyle={this.props.statusBarTheme || "dark-content"}
        />
        <View style={[styles.view, this.props.style]}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0,
  },
  view: {
    flex: 1,
  },
});
