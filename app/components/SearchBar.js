import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.searchKeyword}
          placeholder={this.props.placeholder || "Search"}
          onChangeText={(text) => {
            this.setState({ searchKeyword: text });
            this.props.onChangeText(text);
          }}
          style={styles.input}
        />
        <TouchableWithoutFeedback onPress={this.props.onClose}>
          <MaterialCommunityIcons
            name="close-circle-outline"
            size={23}
            color={colors.medium}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.medium,
    borderRadius: 10,
    // borderWidth: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
    overflow: "hidden",
  },
  icon: {
    alignSelf: "center",
    marginVertical: 5,
    marginEnd: 11,
  },
  input: {
    flex: 1,
    padding: 2,
  },
});
