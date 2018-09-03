import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class BigButton extends React.Component {
  render() {
    return (
      <View style={styles.menuItem}>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('BreathingGif')}>
          <Image source={this.props.itemImage} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuItem:{
    width: '100%',
    height: '100%',
    padding: 5
  },

  image:{
    width: '100%',
    height: '100%'
  },

  button: {
    shadowColor: '#011f4b',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 0.35,
  }

});
