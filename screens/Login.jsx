import { View, Text, StyleSheet, Button, Image } from "react-native"
import { useState } from "react"
const Login = () => {
  const [backgroundColor, setBackgroundColor] = useState("red")
  return (
    <View style={[styles.loginContainer, { backgroundColor }]}>
      <Text style={styles.text}>Log In</Text>
      <View style={styles.logo}>
        <Image
          source={require("../assets/pngtree-school-logo-design-template-vector-png-image_6705854.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="asAdmin"
          onPress={() =>
            setBackgroundColor(backgroundColor === "pink" ? "red" : "pink")
          }
        />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "red",
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    height: "80%",
    paddingTop: 70,
    position: "relative", // Set position to relative
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 30,
    height: 150,
    width: 150,
    backgroundColor: "white",
  },
  buttonContainer: {
    position: "absolute", // Use an extra container for positioning
    top: 0,
    left: 0,
  },
  logoImage: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
})
