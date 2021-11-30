import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import HeaderText from "./HeaderText";
import SearchBar from "../SearchBar";

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="menu"
            size={27}
            color={colors.darkLight}
          />
        </View>
        {this.state.searchBar ? (
          <SearchBar
            placeholder={this.props.placeholder || "Search"}
            onChangeText={this.props.onSearch}
            onClose={() => {
              this.setState({ searchBar: false });
              this.props.onSearchClose();
            }}
          />
        ) : (
          <>
            <View style={styles.text}>
              <HeaderText>{this.props.title}</HeaderText>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                if (this.props.showSearch) this.setState({ searchBar: true });
              }}
            >
              <View style={styles.icon}>
                {this.props.showSearch && (
                  <Octicons name="search" size={20} color={colors.darkLight} />
                )}
              </View>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    elevation: 20,
    flexDirection: "row",
    height: 55,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.03,
    width: "100%",
  },
  text: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  icon: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "15%",
  },
});
