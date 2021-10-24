import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffes & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function categories() {
  return (
    <View
      style={{
        marginTop: 5,
        marginBottom: 7,
        backgroundColor: "#76E",
        paddingVertical: 5,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* loop starts here */}
        {items.map((item, index) => (
          <TouchableOpacity key={index} >
            <View style={{ alignItems: "center", marginRight: 25 }} >
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 35,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 10, fontWeight: "bold", color: "#fff" }}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        {/* loop ends here */}
      </ScrollView>
    </View>
  );
}
