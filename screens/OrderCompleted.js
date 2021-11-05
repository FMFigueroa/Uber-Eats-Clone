import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Pizza 4 Quesos",
        description: "Tomato souce with Mozarella Cheese",
        price: "$ 14.99",
        image:
          "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20&m=938742222&s=170667a&w=0&h=HyfY78AeiQM8vZbIea-iiGmNxHHuHD-PVVuHRvrCIj4=",
      },
      {
        title: "Tacos Mexicanos ",
        description: "Carne Asada en Creeps de Maiz",
        price: "$ 19.99",
        image:
          "https://media.istockphoto.com/photos/three-carne-asada-mexican-street-tacos-in-corn-tortilla-with-lime-picture-id1272532813?b=1&k=20&m=1272532813&s=170667a&w=0&h=0yhpzpLRoBmTq1lxWqpk4_M3vbVhGyYD3zw-cSGVfBw=",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  /*Description:
    '$13.50'
    '13.50'
    Number('13.50')  👉 13.50
    [13.5, 20.5, 19.5]
    reducer 👉 [13.5, 20.5, 19.5]
    reducer 👉 13.5 + 20.5 + 19.5 👉 43.5
  */
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

    return () => (unsubscribe())
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, margintop: 10, backgroundColor: "white" }}>
      <View
        style={{
          marginTop: 50,
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center" }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {"$"}
          {totalUSD}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <Text
            style={{
              marginTop: 30,
              alignSelf: "center",
              fontSize: 28,
              fontWeight: "bold",
              color: "#e82",
            }}
          >
            Thanks you for Buy..!
          </Text>
          <LottieView
            style={{
              height: 200,
              alignSelf: "center",
              justifyContent: 'center',
              marginTop:50,
              marginBottom:100,
            }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
