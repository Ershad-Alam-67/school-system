import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Login from "./screens/Login"

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
