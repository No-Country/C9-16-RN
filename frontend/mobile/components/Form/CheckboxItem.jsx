import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const CheckboxItem = ({textCheckbox}) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text style={styles.textLabel}>{textCheckbox}</Text>
    </View>
  );
};

export default CheckboxItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textLabel: {
    marginLeft: 10
  }
});
