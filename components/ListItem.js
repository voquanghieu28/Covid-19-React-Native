import React, { Component } from 'react';

import {
  Text, View, Image, StyleSheet, TouchableHighlight,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import LocalStorage from '../util/localStorage'

class ListItem extends Component {

    constructor(props) {
      super(props)
      if (this.props.isFavourite != undefined && this.props.isFavourite==true)
        this.state = { 
          imgUrl : 'https://www.countryflags.io/'+props.countryCode+'/flat/64.png',
          isFavourite :  true,
          favouriteIcon : 'star',
          favouriteIconColor : 'orange',
      }
      else
        this.state = { 
          imgUrl : 'https://www.countryflags.io/'+props.countryCode+'/flat/64.png',
          isFavourite :  false,
          favouriteIcon : 'star-outline',
          favouriteIconColor : 'black',
        }
    }


    onFavouritePress() {
      if(!this.state.isFavourite) {
        this.setState({
          favouriteIcon : 'star',
          favouriteIconColor : 'orange',
          isFavourite : true  
        })
        LocalStorage.addFavourite(this.props.countryCode)
        //console.log(LocalStorage.getAllFavourite())

      } else {
        this.setState({
          favouriteIcon : 'star-outline',
          favouriteIconColor : 'black',
          isFavourite : false
        }) 
        LocalStorage.removeFavourite(this.props.countryCode) 
      }
    }

    render() {
      return (
        <View style={styles.wrapper}> 
               
            <Image  source={{ uri: 'https://www.countryflags.io/'+this.props.countryCode+'/flat/64.png',}} style={styles.image}/>
            <View style={styles.data}>
                <Text style={styles.title}>{this.props.name} </Text>
                <Text style={styles.text}>Cases:         <Text style={styles.red}>{this.props.totalConfirm}</Text></Text>
                <Text style={styles.text}>Deaths:        <Text>{this.props.totalDeath}</Text></Text>
                <Text style={styles.text}>Recovered: <Text style={styles.green}>{this.props.totalRecover}</Text></Text>
            </View>

            <View style={{flex:2, justifyContent: 'center', alignItems: 'center', }}>
              <TouchableHighlight onPress={e=>{this.onFavouritePress()}} underlayColor={null}>
                  <Ionicons  name={this.state.favouriteIcon} size={40} color={this.state.favouriteIconColor} />
              </TouchableHighlight>
            </View>

        </View>
      )
    }
}
  
export default ListItem;
  
const styles = StyleSheet.create({
  wrapper : {
    flex: 1, 
    flexDirection: 'row', 
    borderBottomWidth: 1/2,
    borderBottomColor: "#20232a",
    fontSize : 20
  },
  image : {
    width:70, 
    height:70,
    marginLeft : 8,
    flex : 3
  }, data : {
    flexDirection: 'column',
    marginLeft : 10,
    flex : 9
  },
  title : {  
    fontSize : 25,
    flexShrink: 1
  },
  text : { fontSize : 20},
  red : { color : 'red', fontWeight: 'bold'},
  green : { color : 'green', fontWeight: 'bold'}
})