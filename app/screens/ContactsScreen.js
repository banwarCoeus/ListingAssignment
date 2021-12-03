import React, { useEffect, useRef, useState } from "react";

import contactsApi from "../api/listings";
import Header from "../components/header/Header";
import ListItem from "../components/ListItem";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Platform,
  Text,
  View,
} from "react-native";
import colors from "../config/colors";

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
      totalItems: 0,
    };
    this.timeOut = null;
    this.onEndReachedCalledDuringOnMomentum = true;
    this.flatlistRef = React.createRef();
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
      this.setState({ page: this.state.page + 1 });
    }
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
      this.setState({
        data: [...this.state.data, ...response.data.items],
        totalItems: response.data.total_count,
      });
      return;
    }
    this.setState({
      data: response.data.items,
      totalItems: response.data.total_count,
    });
  };

  render() {
    return (
      <Screen>
        <Header
          title={"Contacts"}
          leftIconName={"menu"}
          showSearch={true}
          placeholder={"Search user"}
          onLeftIconPress={() => this.props.navigation.toggleDrawer()}
          onSearch={(keyword) => {
            this.setState({ searchKeyword: keyword });
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(() => {
              this.setState({ page: 1 });
              this.requestContactsList(keyword, false, 1);
              this.flatlistRef.current.scrollToOffset(0, true);
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
              activeStatus={item.site_admin}
              contactsList={true}
              imageUrl={item.avatar_url}
              onPress={() =>
                this.props.navigation.navigate(routes.USER_DETAILS, {
                  detail_url: item.url,
                })
              }
              subtitle={item.node_id}
              title={item.login}
            />
          )}
          ref={this.flatlistRef}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefreshCalled}
          onEndReached={this.onEndReachedCalled}
          onMomentumScrollBegin={() =>
            (this.onEndReachedCalledDuringOnMomentum = false)
          }
          onEndReachedThreshold={0}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            alignSelf: "center",
            paddingVertical: 10,
          }}
        >
          <Text style={{ color: colors.medium }}>
            {this.state.data.length}/{this.state.totalItems}
          </Text>
          <Text>({this.state.page})</Text>
        </View>
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
