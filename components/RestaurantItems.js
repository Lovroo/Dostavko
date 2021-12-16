import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommmunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurant = [
    {
        name: "Zibo",
        image: "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg",
        rating: 4.5,
    },
    {
        name: "Tili",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg",
        rating: 2.5,
    },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
        {props.restaurantData.map((restaurant,index) => (
    <View 
    key = {index}
    style={{marginTop: 10, padding: 15, backgroundColor: "white"}}>
      <ResturantImage image={restaurant.image}/>
      <ResturantInfo name={restaurant.name} rating={restaurant.rating}/>
    </View>
    ))}
    </TouchableOpacity>
  );
}

const ResturantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommmunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const ResturantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>35-40 min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
