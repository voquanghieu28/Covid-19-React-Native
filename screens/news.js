import React, { Component } from 'react'
import {
  Text, View, ScrollView, StyleSheet, Button, TextInput, KeyboardAvoidingView, Image, Linking
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Card } from 'react-native-elements'


class News extends Component {

  constructor(props) {
    super(props)
    this.state = { 
        data : [],
    }
  }

  componentDidMount() {
    fetch("https://api.smartable.ai/coronavirus/news/CA", { headers : {'Subscription-Key' : '3009d4ccc29e4808af1ccc25c69b4d5d'}})
      .then( res => res.json() )
      .then((result) => {         
          this.setState({ 
            data : result.news
          })
        }, (error) => {
          this.setState({
            isLoaded : true,
            error
          })
        }
      )
  }

  render() {
    return (
    <View style={styles.container}>
        <ScrollView>
        {this.state.data.map((value, index) => {
            if(value.images!=null)
                return <Card
                    key={index}
                    title={value.title}
                    image={{uri : value.images[0].url}}>
                    <Text style={{marginBottom: 10}}>
                        {value.excerpt}
                    </Text>
                    <Button
                        icon={<Ionicons name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='READ MORE'
                        onPress={()=> Linking.openURL(value.webUrl)} 
                    />
                </Card> 
        })}
        </ScrollView>
    </View>
      
    )
  }
}
export default News

const styles = StyleSheet.create({
    container :{
      flex : 1,
      justifyContent: 'center', 
      alignItems: 'center' 
    }
  })