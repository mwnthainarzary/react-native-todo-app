import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo App</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "coral",
    },
    title : {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        paddingBottom: 10
    }
})
