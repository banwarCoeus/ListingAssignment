import React from "react";
import { Button, View, requireNativeComponent } from "react-native";

var RNTDatePicker = requireNativeComponent("RNTDatePicker");

export default class ColorPickerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#fff",
    };
  }

  //   openColorPicker = async () => {
  //     try {
  //       const response = await NativeColorPicker.showColorPickerWithPromise();
  //       console.log(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

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
        <RNTDatePicker
          preferredDatePickerStyle={1}
          datePickerMode={1}
          value={new Date(2300, 10, 20)}
          style={{ width: "100%", height: 200 }}
          onChange={(event) => console.log(event.nativeEvent)}
        />
      </View>
    );
  }
}
