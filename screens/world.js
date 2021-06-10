import React, { Component } from 'react'

import { Text, View, StyleSheet, Image } from 'react-native'

class World extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      totalConfirmed: this.props.data.TotalConfirmed,
      totalDeath    : this.props.data.TotalDeaths,
      totalRecovered: this.props.data.TotalRecovered
    }
  }

  render() {
    return (
    <View style={styles.container}>
        {/* <Ionicons  name='earth' type="MaterialIcons" size={300} /> */}
        <View style={{flex:3, justifyContent: 'center' }}>
          <Image style={styles.image} source={{ uri: 'https://freesvg.org/img/1509021067.png' }}/>
        </View>

        <View style={{flex:2}}>
          <Text style={styles.title}>World wide</Text>
          <Text style={styles.text}>{"\n"}Cases:         <Text style={styles.red}>{this.state.totalConfirmed}</Text></Text>
          <Text style={styles.text}>Recovered:  <Text style={styles.green}>{this.state.totalRecovered}</Text></Text>
          <Text style={styles.text}>Deaths:        <Text style={styles.black}>{this.state.totalDeath}</Text></Text>
        </View>
    </View>
      
    )
  }
}
export default World

const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title : {  
    fontSize : 50,
    textAlign: 'center'
  },
  image : {
    width: 300, 
    height: 300
  },
  text : { fontSize : 30},
  red : { color : 'red', fontWeight: 'bold'},
  green : { color : 'green', fontWeight: 'bold'},
  black : { color : 'black', fontWeight: 'bold'}
})

