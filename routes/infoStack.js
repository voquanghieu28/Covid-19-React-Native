import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Info from '../screens/info'

const screens = {
    Info : {
        screen : Info,
        navigationOptions : {
            title : 'Information',
            headerStyle : { backgroundColor : 'lightblue'}
        }
    }
}

const InfoStack = createStackNavigator(screens)
export default createAppContainer(InfoStack)