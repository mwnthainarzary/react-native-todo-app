import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TodoItems({ item, handleDelete }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={styles.itemDelete}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "crimson",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 3,
  },
  itemText: {
    fontSize: 20,
    color: "white",
  },
  itemDelete: {
    fontSize: 20,
    color: "white",
  },
});
