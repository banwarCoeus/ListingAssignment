import React from "react";
import { Button, View, NativeModules } from "react-native";

var { NativeColorPicker } = NativeModules;

export default class ColorPickerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#fff",
    };
  }

  openColorPicker = async () => {
    try {
      const response = await NativeColorPicker.showColorPickerWithPromise();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.state.bgColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="Pick Color" onPress={this.openColorPicker} />
      </View>
    );
  }
}
