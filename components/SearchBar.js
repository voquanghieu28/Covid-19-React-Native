import React, { Component } from 'react';

import {
  StyleSheet, TextInput
} from 'react-native';


class SearchBar extends Component {

    constructor(props) {
      super(props)
      this.state = {
         //text : "Halo"
      }
    }
 
    render() {
      return (
        <TextInput
          style={styles.textInput}
          placeholder = "Type here to search!"
          placeholderTextColor = "gray"
          value ={this.state.text}
          onChangeText = {this.props.onChangeText}
        />
      )
    }
  }
  
export default SearchBar;

const styles = StyleSheet.create({
textInput: {
    height: 40,
    marginLeft: 20, 
    marginRight: 20, 
    fontSize: 20
},

        
})