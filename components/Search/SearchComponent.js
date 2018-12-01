import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import SearchTabComponent from './Tabs/Search';
import FavoritesTabComponent from './Tabs/Favorites';

const SearchComponent = createBottomTabNavigator({
    Search:    { screen: SearchTabComponent },
    Favorites: { screen: FavoritesTabComponent }
},
{
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
          <Footer>
              <FooterTab>
                <Button 
                active = {props.navigation.state.routeName === 'Search'}
                onPress = {() => props.navigation.navigate('Search')}
                light 
                vertical 
                large>
                    <Icon style={buttonStyles.baseButtonIcon} name="search"/>
                    <Text style={buttonStyles.baseButtonText}> Search </Text>
                </Button>

                <Button 
                active = {props.navigation.state.routeName === 'Favorites'}
                onPress = {() => props.navigation.navigate('Favorites')}
                light 
                vertical 
                large>
                    <Icon style={buttonStyles.baseButtonIcon} name="bookmark"/>
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

SearchComponent.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
  
    // You can do whatever you like here to pick the title based on the route name
    const headerTitle = routeName;
  
    return {
      headerTitle,
      headerStyle: { backgroundColor: "#3F51B5" },
      headerTintColor: "#fff"
    };
  };

export default SearchComponent;