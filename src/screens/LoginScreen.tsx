import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Button, TextInput } from 'react-native-paper';

export default function LoginScreen() {
  function firstPressed() {
    console.log('ok');
  }

  

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Welcome to StartPort</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          label="email"
          placeholder="Email"
          style={styles.input}
        ></TextInput>
        <TextInput
          label="password"
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        ></TextInput>
        <Button color="black" style={styles.button} onPress={firstPressed}>
          Login
        </Button>
      </View>

      <Text style={styles.condition}>Read conditions and terms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'purple',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    marginTop: 20,
    backgroundColor: '#ccc',
    borderRadius: 0,
  },
  form: {
    margin: 40,
  },
  button: {
    backgroundColor: 'purple',
    marginTop: 50,
  },
  condition: {
    textAlign: 'center',
    opacity: 0.5,
  },
});
