import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Pizza 4 Quesos",
    description: "Tomato souce with Mozarella Cheese",
    price: "$ 14.99",
    image:
      "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20&m=938742222&s=170667a&w=0&h=HyfY78AeiQM8vZbIea-iiGmNxHHuHD-PVVuHRvrCIj4=",
  },
  {
    title: "Sushi Tempure",
    description: "Delicies Raices rolling & Salmon ",
    price: "$ 24.99",
    image:
      "https://media.istockphoto.com/photos/big-maki-sushi-picture-id108178091?b=1&k=20&m=108178091&s=170667a&w=0&h=LHa7eWJhRDLgnf8aalHepw0XpQIcJeB3p6Dqeiz3JBc=",
  },
  {
    title: "Spaguetti Country",
    description: "Tomato souce with Cheese & Albahaca",
    price: "$ 9.99",
    image:
      "https://media.istockphoto.com/photos/spaghetty-pasta-with-meatballs-and-tomato-sauce-picture-id510685112?b=1&k=20&m=510685112&s=170667a&w=0&h=U1cXFxRlsnDQXD43uLHwfTKEULMtf6r25X46IFLwH2A=",
  },
  {
    title: "Paella del Mar",
    description: "Mariscos fresco y delicias del mar",
    price: "$ 44.99",
    image:
      "https://media.istockphoto.com/photos/preparing-paella-on-the-beach-in-majorca-picture-id1269367119?b=1&k=20&m=1269367119&s=170667a&w=0&h=A9VIpnFFx0XKJkmTAuLCrp42fzWme4fJNaTMmOgxA50=",
  },
  {
    title: "Tacos Mexicanos ",
    description: "Carne Asada en Creeps de Maiz",
    price: "$ 19.99",
    image:
      "https://media.istockphoto.com/photos/three-carne-asada-mexican-street-tacos-in-corn-tortilla-with-lime-picture-id1272532813?b=1&k=20&m=1272532813&s=170667a&w=0&h=0yhpzpLRoBmTq1lxWqpk4_M3vbVhGyYD3zw-cSGVfBw=",
  },
  {
    title: "Fin del Menu ➡ Volver",
    description: "",
    price: "",
    image: "",
  },
  {
    title: "",
    description: "",
    price: "",
    image: "",
  },
  {
    title: "",
    description: "",
    price: "",
    image: "",
  },
  {
    title: "",
    description: "",
    price: "",
    image: "",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
