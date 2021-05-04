import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from './screens/DonateScreen'
import RequestScreen from './screens/RequestScreen'

export const AppTabNaviagtor = createBottomTabNavigator({
    DonateBooks: {
        screen: DonateScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require()}/>,
            tabBarLabel: 'Donate Books'
        }
    },
    BookRequest: {
        screen: RequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require()}/>,
            tabBarLabel: 'Request Books'
        }
    }
        
})