import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/About";
import MenuItems from "../components/MenuItems";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ViewCart from "../components/ViewCart";
import { ScrollView } from "react-native-gesture-handler";

const foods = [
  {
    title: "Lazanja",
    description: "Z masleno solato, paradižnikom in bechamel omako",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori piščanec",
    description: "Izjemna indijska jed iz mladega piščanca direktno z žara",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Užitna mehiška jed s sirom in siracha omako.",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "Nemorete zgrešiti z izbori cezarjeve solate. Zdrava izbira z veliko proteini!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods}/>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Icon icon="arrow-circle-left" />
      </TouchableOpacity>
      <ViewCart navigation={navigation} />
    </View>
    </ScrollView>
  );
}

const Icon = (props) => (
    <View>
      <FontAwesome5
        name={props.icon}
        size={50}
        style={{
          marginBottom: 0,
          left: 0,
        }}
      />
      <Text>{props.text}</Text>
    </View>
);