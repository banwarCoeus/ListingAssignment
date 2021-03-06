import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
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
      <View style={[styles.container, this.props.headerContainerStyle]}>
        <TouchableOpacity
          style={styles.icon}
          onPress={this.props.onLeftIconPress}
        >
          <MaterialCommunityIcons
            name={this.props.leftIconName}
            size={27}
            color={
              this.props.leftIconColor
                ? this.props.leftIconColor
                : colors.darkLight
            }
          />
        </TouchableOpacity>
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
              <HeaderText headerTextStyle={this.props.headerTextStyle}>
                {this.props.title}
              </HeaderText>
            </View>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                if (this.props.showSearch) this.setState({ searchBar: true });
              }}
            >
              {this.props.showSearch && (
                <Octicons name="search" size={20} color={colors.darkLight} />
              )}
            </TouchableOpacity>
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
