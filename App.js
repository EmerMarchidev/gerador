import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-web';
import Slider from '@react-native-community/slider'
import { useState } from 'react';

export default function App() {

  const [size,setSize] = useState(10)

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50}}
          minumumValue={6}
          maximumValeu={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#392de9'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={ (value) => setSize(value) }
        />
      </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
      
  
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    // backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
