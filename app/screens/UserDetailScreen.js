import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

import colors from "../config/colors";
import contactsApi from "../api/listings";
import Header from "../components/header/Header";
import InfoItem from "../components/InfoItem";
import Screen from "../components/Screen";

const accountInfoItems = [
  {
    key: "property_1",
    title: "Twitter",
    param: "twitter_username",
    icon: "twitter",
  },
  {
    key: "property_2",
    title: "Location",
    param: "location",
    icon: "google-maps",
  },
  {
    key: "property_3",
    title: "Company",
    param: "company",
    icon: "office-building",
  },
  {
    key: "property_4",
    title: "Followers",
    param: "followers",
    icon: "account-group",
  },
  {
    key: "property_5",
    title: "Following",
    param: "following",
    icon: "account-multiple-plus",
  },
];

export default class UserDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      data: null,
    };
  }

  componentDidMount() {
    this.requestUserDetail(this.props.route.params.detail_url);
  }

  requestUserDetail = async (url) => {
    this.setState({ loading: true });
    const response = await contactsApi.userDetail(url);
    this.setState({ loading: false });

    console.log("Api Called", response.data);

    if (!response.ok) return this.setState({ error: true });

    this.setState({ error: false, data: response.data });
  };

  render() {
    return (
      <Screen
        statusBarColor={colors.purple}
        statusBarTheme="light-content"
        style={{ backgroundColor: "white" }}
      >
        <Header
          title={""}
          headerTextStyle={{ color: colors.white }}
          leftIconColor={colors.white}
          showSearch={false}
          leftIconName={"keyboard-backspace"}
          onLeftIconPress={() => this.props.navigation.goBack()}
          headerContainerStyle={{
            backgroundColor: colors.purple,
            elevation: 0,
          }}
        />
        {this.state.loading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size={20} />
          </View>
        ) : (
          <>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>User Detail</Text>
              <Image
                source={{
                  uri:
                    this.state.data?.avatar_url ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4TKmLL_Yab3zrnGsM-6FzOgBGSm3lcXkndb1E5xQagw5YlZ9ClcBcC46v3Eq9vfBSIQ&usqp=CAU",
                }}
                style={styles.headerImage}
              />
            </View>
            <View style={styles.detailsConatiner}>
              <Text style={styles.name}>{this.state.data?.name || ""}</Text>
              {this.state.data?.blog != null && this.state.data?.blog != "" ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text style={styles.email}>
                    {this.state.data?.blog || ""}{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      Clipboard.setString(this.state.data?.blog);
                      Alert.alert(
                        "Copy Blog",
                        "Link to the blog has been successfully copied!"
                      );
                    }}
                  >
                    <MaterialCommunityIcons
                      name="content-copy"
                      color={colors.purple}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.accountDetailsContainer}>
                <Text style={styles.accountDetailsHeader}>Account Info</Text>
                {accountInfoItems.map((item, index) => (
                  <InfoItem
                    key={item.key}
                    title={item.title}
                    subTitle={
                      this.state.data?.[item.param] ||
                      "Information not available"
                    }
                    iconName={item.icon}
                  />
                ))}
              </View>
            </ScrollView>
          </>
        )}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  accountDetailsContainer: { padding: 40 },
  accountDetailsHeader: { fontWeight: "bold", fontSize: 18 },
  detailsConatiner: {
    width: "100%",
    marginTop: 30,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
    borderBottomColor: colors.medium,
  },
  email: { color: colors.medium, fontWeight: "500" },
  headerContainer: {
    width: "100%",
    height: 125,
    backgroundColor: colors.purple,
    borderBottomStartRadius: 80,
  },
  headerImage: {
    width: 125,
    height: 125,
    alignSelf: "center",
    borderRadius: 75,
    bottom: -30,
  },
  headerText: { color: "white", fontSize: 20, marginStart: 20 },
  name: { fontWeight: "bold", fontSize: 23 },
});
