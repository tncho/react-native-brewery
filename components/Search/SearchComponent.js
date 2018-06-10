import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import SearchTabComponent from './Tabs/Search';
import FavoritesTabComponent from './Tabs/Favorites';

const SearchComponent = createBottomTabNavigator({
    SearchTab:    { screen: SearchTabComponent },
    FavoritesTab: { screen: FavoritesTabComponent }
},
{
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
          <Footer>
              <FooterTab>
                <Button 
                active = {props.navigation.state.routeName === 'SearchTab'}
                onPress = {() => props.navigation.navigate('SearchTab')}
                light 
                vertical 
                large>
                    <Icon style={buttonStyles.baseButtonIcon} name="search"/>
                    <Text style={buttonStyles.baseButtonText}> Search </Text>
                </Button>

                <Button 
                active = {props.navigation.state.routeName === 'FavoritesTab'}
                onPress = {() => props.navigation.navigate('FavoritesTab')}
                light 
                vertical 
                large>
                    <Icon style={buttonStyles.baseButtonIcon} name="star"/>
                    <Text style={buttonStyles.baseButtonText}> Favorites </Text>
                </Button>
              </FooterTab>
          </Footer>
      )
    }
}
);

const buttonStyles = StyleSheet.create({
    baseButtonIcon: {
      fontSize: 20,
      color: 'gray'
    },
    baseButtonText: {
      fontSize: 14,
      color: 'gray'
    }
});

export default SearchComponent;