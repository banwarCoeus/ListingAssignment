import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";

import Header from "../components/header/Header";
import colors from "../config/colors";
import { ScrollView } from "react-native-gesture-handler";

const aboutItems = [
  {
    title: "The Perfect Choice For Your (Next) Venture",
    description:
      "Coeus Solutions is a preeminent software development company, founded in 2003. Having a vision in the eyes to deliver excellence in the IT industry, the company started with a mere 20 employees. Moreover, as of today, Coeus operates in 3 Continents (America, Asia, Europe) and houses hundreds of full stack development gurus who know their way around technologies.",
  },
  {
    title: "WHAT WE DO",
    description:
      "We develop customized web and mobile solutions for a wide variety of platforms, to deliver according to the needs of our clients. Our core strength is our flexibility and customization.",
  },
  {
    title: "OUR CLIENTS",
    description:
      "Through the continuous effort of our team of highly skilled tech enthusiasts, we have produced a lot of high-quality work at a competitive standard for the top German DAX30 companies.",
  },
  {
    title: "OUR PEOPLE",
    description:
      "We believe a company is as good as its team. That is why, Coeus Solutions has a rigorous three-step interview process in which technical skills and analytical abilities are measured.",
  },
  {
    title: "OUR CULTURE",
    description:
      "At Coeus, we believe in a working environment that ideally portrays openness, respect, fairness, and mutual trust, as these traits are the ultimate necessity for productive results and continuous innovations.",
  },
];

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Screen>
        <Header
          title={"About"}
          leftIconName={"menu"}
          showSearch={false}
          onLeftIconPress={() => this.props.navigation.toggleDrawer()}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: "100%",
              paddingVertical: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              // @ts-ignore
              source={require("../assets/coeusLogo.png")}
              style={{ width: 120, height: 120, borderRadius: 60 }}
            />
            <Text style={styles.headerTitle}>Coeus Solutions</Text>
            <Text style={styles.headerSubTitle}>Software House</Text>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 20, paddingBottom: 20 }}>
            {aboutItems.map((item) => (
              <View key={item.title} style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>
                  {item.title}
                </Text>
                <Text style={{ marginVertical: 5 }}>{item.description}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    color: colors.black,
    fontWeight: "600",
    marginVertical: 5,
    fontSize: 18,
  },
  headerSubTitle: { color: colors.black, fontWeight: "400" },
  iconsContainer: {
    flexDirection: "row",
    marginVertical: 5,
    width: 55,
    justifyContent: "space-between",
  },
});
