import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  /* Configuracion de Firebase */
  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAT: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderCompleted");
        }, 2500);
      });
  };
  /* Configuracion of StyleSheet Global */
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContiner: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
      marginTop: 200,
    },
    restaurantName: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subtotalText: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 15,
      marginBottom: 10,
    },
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContiner}>
            <Text onPress={() => navigation.goBack('RestaurantDetail')}> {'< GoBack'} </Text>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>
                {"$"}
                {totalUSD}
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "#f40",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFireBase();
                  setModalVisible(false); // transition Screen OrderCompleted
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  ({"$"}
                  {total ? totalUSD : ""})
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  //console.log(totalUSD);
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 360,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 30,
                width: 250,
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Icon icon="shopping-cart" />
              <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
                View Cart
              </Text>
              {/* redux TotalUSD */}
              <Text
                style={{
                  marginLeft: 10,
                  color: "#fff",
                  fontSize: 22,
                  //fontWeight: "bold",
                }}
              >
                ({totalUSD})
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
const Icon = (props) => (
  <View style={{ marginHorizontal: 15 }}>
    <FontAwesome5
      name={props.icon}
      color={"#eee"}
      size={18}
      style={{
        alignSelf: "center",
      }}
    />
  </View>
);
