import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

const colorsArray = [
  colors.purple,
  colors.danger,
  colors.medium,
  "yellow",
  "orange",
];

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <ScrollView
        style={{
          width: "100%",
          flexDirection: "row",
          height: 50,
          marginVertical: 5,
        }}
        horizontal
      >
        {colorsArray.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => this.props.onColorSelect(item)}
            style={{
              width: 40,
              height: 40,
              backgroundColor: item,
              borderRadius: 10,
              marginHorizontal: 5,
              borderColor: "black",
              borderWidth: this.props.selectedColor === item ? 4 : 0,
            }}
          />
        ))}
      </ScrollView>
    );
  }
}
