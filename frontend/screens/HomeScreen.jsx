import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";

const HomeScreen = ({navigation}) => {
    const pressHandler = () => {
        navigation.navigate("Login")
    }
  return (
    <Pressable onPress={pressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <Text>HomeScreen</Text>
      </View>
    </Pressable>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pressed: { opacity: 0.75 },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
});
