import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import PasswordRecovery from "./screens/PasswordRecovery";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
// const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#8C52FF" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <LoginScreen />
//     </View>
//   );
// }

