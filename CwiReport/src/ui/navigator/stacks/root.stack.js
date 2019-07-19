import { createStackNavigator } from 'react-navigation'

import { RootTabBar } from '../tabbar/root.tabbar'

import { LoginStack } from './login/login.stack'

debugger

export const RootStack = createStackNavigator(
    {
        LoginStack: {
            screen: LoginStack,
            navigationOptions: {
                header: null
            }
        },
        RootTabBar: {
            screen: RootTabBar,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        mode: 'modal'
    }
)