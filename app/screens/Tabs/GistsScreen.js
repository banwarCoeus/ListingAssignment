import React from "react";
import { FlatList, Text, View } from "react-native";

import listingApi from "../../api/listings";
import ColorPicker from "../../components/ColorPicker";
import ListItem from "../../components/ListItem";
import colors from "../../config/colors";

export default class GistsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      selectedThemeColor: colors.purple,
      data: [],
    };
  }

  componentDidMount() {
    this.requestGistsList();
  }

  requestGistsList = async () => {
    this.setState({ loading: true });
    const response = await listingApi.gistsListing();
    this.setState({ loading: false });

    console.log("Api Called", response.ok);

    if (!response.ok) return this.setState({ error: true });

    this.setState({ error: false });
    this.setState({
      data: response.data,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ColorPicker
          selectedColor={this.state.selectedThemeColor}
          onColorSelect={(color) =>
            this.setState({ selectedThemeColor: color })
          }
        />
        {this.state.error && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text>Couldn't retrieve the listings.</Text>
          </View>
        )}
        <FlatList
          data={this.state.data || []}
          keyExtractor={(listItem) => listItem.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              activeStatus={false}
              imageUrl={item.owner.avatar_url}
              subtitle={item?.description || ""}
              title={item.owner.login}
              themeColor={this.state.selectedThemeColor}
            />
          )}
        />
      </View>
    );
  }
}
