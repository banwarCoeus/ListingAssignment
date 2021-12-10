import React from "react";
import { View, requireNativeComponent } from "react-native";

var RNTDatePicker = requireNativeComponent("RNTDatePicker");

export default class DatePickerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#fff",
    };
  }

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
          preferredDatePickerStyle={2}
          datePickerMode={2}
          showCalendar={false}
          value={new Date(2300, 10, 20)}
          style={{ width: "100%", height: 500 }}
          //   onDateChanged={(date) => console.log(date.nativeEvent)}
          onChange={(event) => console.log(event.nativeEvent)}
        />
      </View>
    );
  }
}
