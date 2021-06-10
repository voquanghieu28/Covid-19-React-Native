import React, { Component } from 'react'

import { View, ScrollView, StyleSheet, Animated, RefreshControl } from 'react-native'
import { SearchBar } from 'react-native-elements'

import ListItem from '../components/ListItem'
import LocalStorage from '../util/localStorage'

const AnimatedSearchBar = Animated.createAnimatedComponent(SearchBar)

class Countries extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      data : this.props.data, 
      displayData : this.props.data,
      text : '',
      refreshing : false,
      favouriteList : LocalStorage.getAllFavourite()
    } 
  }
  
  refreshing() {
    this.setState({
      refreshing : true,
      favouriteList : LocalStorage.getAllFavourite(),
    })

    setTimeout(() => {
      this.setState({refreshing : false})
    }, 300)

    this.forceUpdate()
  }

  onChangeText(text) {
    this.setState({text : text})
    var filteredCountries

    if (text.length==0)
      filteredCountries = this.state.data
    else
      filteredCountries =  this.state.data.filter((country) => {
        return country.Country.toLowerCase().includes(text.toLowerCase())
      })

    this.setState({displayData : filteredCountries})
  }


  render() {
    return (
        <View style={styles.background}>
        <View style={styles.container}>                  
                <AnimatedSearchBar
                  inputStyle={{color: 'black'}}
                  platform="default"
                  round
                  searchIcon={{ size: 24 }}
                  lightTheme={true}
                  placeholder="Type here to search!"
                  onChangeText={text =>{ this.onChangeText(text)} }
                  value={this.state.text}
                  onClear={(text)=> this.setState({text : ''})}
                  ref={search => this.search = search}
                />  
            
            
            <ScrollView style={styles.scrollView}
                 refreshControl={ <RefreshControl  refreshing={this.state.refreshing} onRefresh={()=>this.refreshing()} /> }
            >  
              {this.state.displayData.map((value, index) => {
                  
                  var isFavourite = false

                  if (this.state.favouriteList.includes(value.CountryCode))
                    isFavourite = true 
                    
                  return <ListItem 
                    name          = {value.Country}
                    totalConfirm  = {value.TotalConfirmed}
                    newDeath      = {value.NewDeaths}
                    totalDeath    = {value.TotalDeaths}
                    newRecover    = {value.NewRecovered}
                    totalRecover  = {value.TotalRecovered}
                    countryCode   = {value.CountryCode}
                    key           = {index}
                    isFavourite   = {isFavourite}
                  />
              })}
            </ScrollView>
          
        </View>
      </View>
      
    )
  }
}
export default Countries;

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