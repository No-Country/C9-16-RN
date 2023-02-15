import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Input from "../components/Form/Input";
import CheckboxItem from "../components/Form/CheckboxItem";

const LoginScreen = () => {
  const gap = 2;
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Logo.png")} />
      <View styles={styles.formCtn}>
        <Input
          label="Email"
          placeholder="Email"
          secureTextEntry={false}
          keyboardType="email-address"
        />
        <Input
          label="Contraseña"
          placeholder="Contraseña"
          secureTextEntry={true}
          keyboardType="default"
        />
        <CheckboxItem textCheckbox="Recuérdame" />
      </View>
      <Pressable style={styles.buttonSubmit}>
        <Text style={styles.buttonTxt}>INICIA SESIÓN</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.span}>¿Has olvidado tu contraseña?</Text>
      </Pressable>
      <Text>o inicia sesion con</Text>
      <Image source={require("../assets/FB.png")} />
      <View style={styles.signupCtn}>
        <Text>Si no tienes cuenta,</Text>
        <Pressable>
          <Text style={styles.span}> registrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  formCtn: {},
  buttonSubmit: {
    backgroundColor: "#8C52FF",
    borderRadius: 18,
    padding: 14,
    alignItems: "center",
    width: 230,
  },
  buttonTxt: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  signupCtn: {
    flexDirection: "row",
  },
  span: {
    color: "#4A72FF",
  },
  btnText: {
    color: "#4A72FF",
  },
});
