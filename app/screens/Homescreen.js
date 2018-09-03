import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MenuItem from '../components/MenuItem';
import BigButton from '../components/BigButton';

export default class Homescreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>

        </View>

        <View style={styles.mainButtonContainer}>
          <BigButton itemImage={require('./app/assets/img/BreatheWithTheApp.png')}/>
        </View>

        <View style={styles.menuContainer}>
          <MenuItem itemImage={require('./app/assets/img/CallAHelpline.png')}/>
          <MenuItem itemImage={require('./app/assets/img/ConnectWithOthers.png')}/>
          <MenuItem itemImage={require('./app/assets/img/DistractYourself.png')}/>
          <MenuItem itemImage={require('./app/assets/img/ManagingYourHealth.png')}/>
          <MenuItem itemImage={require('./app/assets/img/HowCanIHelp.png')}/>
          <MenuItem itemImage={require('./app/assets/img/AboutAnqiQu.png')}/>
        </View>

        <View style={styles.footerContainer}>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerContainer:{
    height: '13%',
    padding: 10,
  },

  footerContainer:{
    height: '7%',
    padding: 10
  },

  mainButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    padding: 10,
    paddingBottom: 0
  },

  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    paddingTop: 0
  },

});
