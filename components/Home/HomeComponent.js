import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';

const homeScreenImage = require('../../assets/home/hsbackground.jpg');

class HomeComponent extends Component {

  static navigationOptions = {
      header: null
  }

  render() {
    return (
      <View style={styles.homeScreenView}>

        <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
            <Image source={homeScreenImage} style={{ flex: 1, height: null, width: null }}></Image>
        </View>
        <Button 
            block={true}
            onPress={() => this.props.navigation.navigate('SearchTabNavigator')}>
            <Text style={{color: 'white'}}>Search for beers</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})

export default HomeComponent;