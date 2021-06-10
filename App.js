import React, { Component } from 'react'

import {
  Text, View, ScrollView, StyleSheet, Button, TextInput, KeyboardAvoidingView, 
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'





import HomeScreen from './screens/countries'
import InfoScreen from './screens/world'
import FavouriteScreen from './screens/favourite'
import NewsScreen from './screens/news'
import LocalStorage from './util/localStorage'

const Tab = createBottomTabNavigator()


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      data : {
        Global : {},
        Countries : []
      }

    }
    
    fetch("https://api.covid19api.com/summary")
      .then( res => res.json() )
      .then((result) => {         
          this.setState({ 
            data : result
          })
        }, (error) => {
          this.setState({
            isLoaded : true,
            error
          })
        }
      )
    
  



}
  componentDidMount() {
    
  }

  render() {

    return (
      <NavigationContainer >
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Countries') {
                    iconName = 'flag'
                  } else if (route.name === 'World') {
                    iconName = 'earth'
                  } else if (route.name === 'Favourite') {
                    iconName = 'star'
                  } else if (route.name === 'News')
                    iconName = 'ios-newspaper'
      
       
                  return <Ionicons  name={iconName} type="MaterialIcons" size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            
            >

                <Tab.Screen name="World"      children={() => <InfoScreen data={this.state.data.Global}/>} />
                <Tab.Screen name="Countries"  children={() => <HomeScreen data={this.state.data.Countries}/>} />
                
                <Tab.Screen name="Favourite"     children={() => <FavouriteScreen data={this.state.data.Countries}/>} />
                <Tab.Screen name="News"    component={NewsScreen} />
            </Tab.Navigator>
      </NavigationContainer>

      
    )
  }

  screenOptions() {}
}
export default App

