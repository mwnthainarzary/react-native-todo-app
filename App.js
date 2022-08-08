import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "./components/header";
import Home from "./screens/home";

// import Navigator from './routes/homeStack';

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1 }}>
        <Header />
        <Home />
      </View>
    </TouchableWithoutFeedback>
  );
}
