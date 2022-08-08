import React from "react";

import { StyleSheet, TextInput, Button, View } from "react-native";

export default function AddTodo({
  handlePress,
  text,
  roll,
  onChangeRoll,
  onChangeText,
}) {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeRoll}
        value={roll}
        placeholder="Enter Roll"
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <Button title="Add" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
  },
  input: {
    height: 40,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 10,
  },
});
