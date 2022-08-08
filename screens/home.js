import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "../components/addTodo";
import TodoItems from "../components/todoItems";

export default function Home({ navigation }) {
  const [text, changeText] = useState("");
  const [roll, changeRoll] = useState("");
  const [lists, setLists] = useState([
    { name: "mwnthai", roll: 23, id: 1 },
    { name: "gemsrang", roll: 30, id: 2 },
    { name: "maharaj", roll: 40, id: 3 },
  ]);

  const handlePress = () => {
    if (text.length > 3) {
      setLists([...lists, { name: text, roll: roll, id: lists.length + 1 }]);
      changeText("");
      changeRoll("");
    } else {
      Alert.alert("Error", "Name must be greater then 3 character", [
        { text: "OK" },
      ]);
    }
  };

  const handleDelete = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const onChangeText = (text) => {
    changeText(text);
  };

  const onChangeRoll = (roll) => {
    changeRoll(roll);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <AddTodo
          handlePress={handlePress}
          text={text}
          roll={roll}
          onChangeRoll={onChangeRoll}
          onChangeText={onChangeText}
        />
        <Text style={styles.title}>Name Lists</Text>
        <FlatList
          data={lists}
          renderItem={({ item }) => (
            <TodoItems item={item} handleDelete={handleDelete} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
    fontWeight: "bold",
  },
});
