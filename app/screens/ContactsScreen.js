import React, { useEffect, useRef, useState } from "react";

import contactsApi from "../api/listings";
import Header from "../components/header/Header";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Platform,
  Text,
  View,
} from "react-native";

export default class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      searchKeyword: "a",
      refreshing: false,
      loading: false,
      error: false,
      data: [],
    };
    this.timeOut = null;
    this.onEndReachedCalledDuringOnMomentum = true;
  }

  componentDidMount() {
    this.setState({ refreshing: true });
    this.requestContactsList(this.state.searchKeyword, false, 1);
  }

  onEndReachedCalled = () => {
    if (!this.onEndReachedCalledDuringOnMomentum) {
      this.requestContactsList(
        this.state.searchKeyword,
        true,
        this.state.page + 1
      );
      this.onEndReachedCalledDuringOnMomentum = true;
    }
    this.setState({ page: this.state.page + 1 });
  };

  onRefreshCalled = () => {
    this.setState({ page: 1, refreshing: true });
    this.requestContactsList(this.state.searchKeyword, false, 1);
  };

  requestContactsList = async (...args) => {
    if (!this.state.refreshing) this.setState({ loading: true });
    const response = await contactsApi.searchUsers(...args);
    this.setState({ loading: false, refreshing: false });

    console.log("Api Called", response.ok);

    if (!response.ok && !args[1]) return this.setState({ error: true });

    this.setState({ error: false });
    if (args[1]) {
      this.setState({ data: [...this.state.data, ...response.data.items] });
      return;
    }
    this.setState({ data: response.data.items });
  };

  render() {
    return (
      <Screen>
        <Header
          title={"Contacts"}
          showSearch={true}
          placeholder={"Search user"}
          onSearch={(keyword) => {
            this.setState({ searchKeyword: keyword });
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(() => {
              this.setState({ page: 1 });
              this.requestContactsList(keyword, false, 1);
            }, 1000);
          }}
          onSearchClose={() => {
            this.setState({ page: 1 });
            this.requestContactsList("a", false, 1);
            this.setState({ searchKeyword: "a" });
          }}
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
              imageUrl={item.avatar_url}
              activeStatus={item.site_admin}
              title={item.login}
              subtitle={item.node_id}
            />
          )}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefreshCalled}
          onEndReached={this.onEndReachedCalled}
          onMomentumScrollBegin={() =>
            (this.onEndReachedCalledDuringOnMomentum = false)
          }
          onEndReachedThreshold={0}
        />
        {this.state.loading && !this.state.refreshing && (
          <ActivityIndicator
            size={25}
            color="#000"
            style={{ paddingBottom: Platform.OS === "ios" ? 0 : 10 }}
          />
        )}
      </Screen>
    );
  }
}
