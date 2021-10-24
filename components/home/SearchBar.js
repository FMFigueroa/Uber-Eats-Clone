import React from "react";
import { View, Text } from "react-native";
import config from "../../config";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({cityHandler}) {
  return (
    <View style={{ marginTop: 20, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: config.KEY}}
        onPress={(data, datails = null) => {
          console.log(data.description)
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 5,
          },
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 5,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color={"#000"} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 50,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
              color={"#666"}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
