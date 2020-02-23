import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Create a Pokemon object
class Pokemon {
  constructor(coorx, coory, type) {
    this.coorx = coorx;
    this.coory = coory;
    this.type = type;
}
}

// List of all of the Pokemon 
let listOfPokemon = ["Bulbasaur", "Charmander", "Diglett", "Jigglypuff", "Pikachu", "Bellsprout", "Meowth", "Psyduck", "Squirtle", "Voltorb"];

// Timer
var generatePokemon = setInterval(createPokemon, 15000);

// Generates a Pokemon every 15 secs; after 15 secs it will regenerate in a new location
function createPokemon() {
  const type = listOfPokemon.random;
  const coorx = Math.random(0,8);
  const coory = Math.random(0,8);
  const current = new Pokemon(coorx, coory, type);
}