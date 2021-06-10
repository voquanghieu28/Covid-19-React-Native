import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Info from '../screens/info'

const screens = {
    Home : {
        screen : Home,
        navigationOptions : {
            title : 'Cases per country',
            headerStyle : { backgroundColor : 'lightblue'}
        }
    }
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)