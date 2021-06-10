import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home'
import InfoScreen from '../screens/info'

const Tab = createBottomTabNavigator()


export default function() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Info" component={InfoScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}



