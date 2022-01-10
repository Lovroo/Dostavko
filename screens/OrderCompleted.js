import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import LottieView from 'lottie-react-native';
import firebase from 'firebase/compat'
import MenuItems from "../components/MenuItems";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lazanja",
        description: "Z masleno solato, paradižnikom in bechamel omako",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
          <Icon icon="check" style={{alignSelf: "center" }} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Vaše naročili pri restavraciji {restaurantName} je bilo naročeno za ceno {totalUSD}!
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
        </ScrollView>
        <View style={styles.animationContainer}>
        <LottieView
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../assets/animations/cooking.json')}
        />
      </View>
      </View>
    </SafeAreaView>
  );
}

const Icon = (props) => (
      <View>
        <FontAwesome5
          name={props.icon}
          size={200}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
        <Text>{props.text}</Text>
      </View>
  );

  const styles = StyleSheet.create({
    animationContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  });