import { createAppContainer, createSwitchNavigator } from 'react-navigation'
//createDrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator

import Login from './pages/Login'
import Main from './pages/Main'

export default createAppContainer(
    createSwitchNavigator({ // SwitchNavigator is used for login, to make people dont come back to that first link, atention: the order of the components matters!
        Login,
        Main,
    }))