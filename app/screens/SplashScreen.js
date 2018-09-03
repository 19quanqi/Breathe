import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SplashScreen extends React Component{
  render(){
    return (
      <View style={styles.container}
        <View style = {styles.titleWrapper}
          <Text style={styles.title}>Breathe</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>By Anqi Qu</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55E6C1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleWrapper: {
    flex: 1,
    justifyContent: 'center'
  },

  title:{
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold'
  }

  subtitle:{
    color: 'white',
    fontSize: 12,
    fontWeight: 'light',
    paddingBottom: 20
  }
});
