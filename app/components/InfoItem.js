import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default class InfoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={this.props.iconName}
            size={25}
            color={colors.white}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.subTitle}>{this.props.subTitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.purple,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    height: "100%",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 10,
    color: colors.medium,
  },
  subTitle: { color: colors.medium, fontWeight: "500", fontSize: 16 },
});
