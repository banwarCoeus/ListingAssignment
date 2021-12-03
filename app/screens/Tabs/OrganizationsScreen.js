import React from "react";
import { FlatList, Text, View } from "react-native";

import listingApi from "../../api/listings";
import ListItem from "../../components/ListItem";

export default class OrganizationsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      data: [],
    };
  }

  componentDidMount() {
    this.requestOrganizationsList();
  }

  requestOrganizationsList = async () => {
    this.setState({ loading: true });
    const response = await listingApi.organizationsListing();
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
              imageUrl={item.avatar_url}
              subtitle={item.node_id}
              title={item.login}
            />
          )}
        />
      </View>
    );
  }
}
