import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 6,
          paddingHorizontal: 10,
          backgroundColor: "#76E",
        }}
      >
        <Icon icon="home" text="Home" />
        <Icon icon="search" text="Browse" />
        <Icon icon="shopping-bag" text="Grocery" />
        <Icon icon="receipt" text="Orders" />
        <Icon icon="user" text="Account" />
        <Icon icon="users" text="Account" />
        <Icon icon="facebook" text="Account" />
        <Icon icon="youtube" text="Account" />
        <Icon icon="instagram" text="Account" />
        <Icon icon="bitcoin" text="Account" />
      </View>
    </ScrollView>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
      <View style={{ marginHorizontal: 16 }}>
        <FontAwesome5
          name={props.icon}
          color={"#fff"}
          size={28}
          style={{
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            fontSize: 10,
            fontWeight: "400",
            color: "#fff",
          }}
        >
          {props.text}
        </Text>
      </View>
  </TouchableOpacity>
);
