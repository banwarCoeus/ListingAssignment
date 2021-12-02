import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.imageContiner}>
          <Image source={{ uri: this.props.imageUrl }} style={styles.image} />
          <View
            style={[
              styles.status,
              {
                backgroundColor: this.props.activeStatus
                  ? "#F64A4D"
                  : "#40B91E",
              },
            ]}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {this.props.title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {this.props.subtitle}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.medium} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: 110,
    padding: 20,
    width: "100%",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 15,
  },
  image: {
    borderRadius: 50,
    height: "100%",
    width: "100%",
  },
  imageContiner: {
    borderColor: colors.darkLight,
    borderRadius: 50,
    borderWidth: 1,
    height: 70,
    padding: 2,
    width: 70,
  },
  status: {
    borderRadius: 25,
    bottom: 7,
    position: "absolute",
    height: 13,
    right: 3,
    width: 13,
    zIndex: 10,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: "400",
  },
  title: {
    fontWeight: "600",
    fontSize: 17,
    marginBottom: 3,
  },
});
