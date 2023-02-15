import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

const Input = ({label, placeholder, secureTextEntry, keyboardType}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} keyboardType={keyboardType}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#F4F1FC",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 5
    }, 
    label: {
        color: "#4A72FF",
        fontSize: 20,
        fontWeight: '200'
    },
    input: {
        color: GlobalStyles.colors.primary700,
        padding: 6,
        fontSize: 18,
      },
})