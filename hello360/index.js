import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('hello360', () => hello360);

// Pokemon Placement
function placePokemon() {
  var count = 30;
  var timer = setInterval(function() {
    $("#counter").html(count--);
    if (count == 1) { // if 30 seconds has passed || function is stopped, timer is stopped
      clearInterval(timer);
    }
  }, 30000); // 30 seconds
  return;
}

// Point System
function pointsTracker() { // based on number of pokemons caught
  var points = 0;
  if (caughtPokemon) { // some boolean variable indicating if pokemon has been caught
    points++;
  } 
}



