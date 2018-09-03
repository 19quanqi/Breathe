import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class BreathingShape extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Insert Breathing Shape here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});
