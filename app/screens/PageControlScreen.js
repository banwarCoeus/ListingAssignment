import React from "react";
import { Button, View, requireNativeComponent } from "react-native";

var PageControlView = requireNativeComponent("RNTPageControl");

export default class PageControlScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#fff",
      page: 0,
    };
    this.pageControlRef = null;
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
        <PageControlView
          numberOfPages={6}
          progress={this.state.page}
          style={{ marginBottom: 10 }}
        />
        <Button
          title={"Change page"}
          onPress={() => {
            if (this.state.page == 5) this.setState({ page: 0 });
            else this.setState({ page: this.state.page + 1 });
          }}
        />
      </View>
    );
  }
}
