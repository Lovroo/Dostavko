import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Prevzem",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Peciva in kruh",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Hitra hrana",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Posebne ponudbe",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Čaj & Kava",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Sladice",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Pijače",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
