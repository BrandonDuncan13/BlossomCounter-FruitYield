import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    marginBottom: 120,
    backgroundColor: "#1c1c1a",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
})

const BicycleApp = () => {

  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);
  const onPress = () => alert("Larry Wheels");

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require('./images/bruno-martins-uk_BNuMXzRE-unsplash.jpg')}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          activeOpacity={.8}
        >
          <Text style={styles.text}>Send An Alert</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
export default BicycleApp;