import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../config/colors";

export default class HeaderText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text style={styles.text}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    color: colors.medium,
    fontSize: 21,
    fontWeight: "500",
  },
});
