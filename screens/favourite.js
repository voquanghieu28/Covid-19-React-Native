import React, { Component } from 'react'

import { View, ScrollView, StyleSheet, Animated, RefreshControl} from 'react-native'
import { SearchBar } from 'react-native-elements'

import ListItem from '../components/ListItem'
import LocalStorage from '../util/localStorage'

const AnimatedSearchBar = Animated.createAnimatedComponent(SearchBar)

class Favourite extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      data : this.props.data, 
      displayData : [],
      favouriteList : LocalStorage.getAllFavourite(),
      refreshing : false
    } 
  }

  refreshing() {
    this.setState({
      refreshing : true,
      favouriteList : LocalStorage.getAllFavourite(),
    })
    setTimeout(() => {
      this.setState({refreshing : false})
    }, 400);
  }

  render() {
    return (
        <View style={styles.background}>
        <View style={styles.container}>           

            <ScrollView style={styles.scrollView} 
                refreshControl={ <RefreshControl  refreshing={this.state.refreshing} onRefresh={()=>this.refreshing()} /> }
            >  
              {this.state.favouriteList.map((value, index) => { 
                var result = this.props.data.filter(obj => {return obj.CountryCode === value})    

                return <ListItem 
                  name          = {result[0].Country}
                  totalConfirm  = {result[0].TotalConfirmed}
                  newDeath      = {result[0].NewDeaths}
                  totalDeath    = {result[0].TotalDeaths}
                  newRecover    = {result[0].NewRecovered}
                  totalRecover  = {result[0].TotalRecovered}
                  countryCode   = {result[0].CountryCode}
                  key           = {index}
                  isFavourite   = {true}
                />
              })}
            </ScrollView>
          
        </View>
      </View>
      
    )
  }
}
export default Favourite

const styles = StyleSheet.create({
  background : {
    flex: 1, 
  },
  container: {
    flex: 1,
  },
  scrollView : {
    backgroundColor : 'white'
  },
  textInput: {
    height: 45,
    fontSize: 20,
  },
  searchBar : {
    height: 60,   
  }
})