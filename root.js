import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// style
import { ms } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'

// navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CV from './src/Screen/CV'
import GlobalReducer from './src/Store/globalReducer'
import { Image, TouchableOpacity } from 'react-native'
import { setDarkMode } from './src/Store/globalAction'

const Tab = createBottomTabNavigator()

export default function Root() {
    const darkMode = useSelector(state => { return state.GlobalReducer.darkMode })
    const dispatch = useDispatch()

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='CURRICULUM VITAE'
                screenOptions={{
                    headerStyle: {
                        height: ms(50),
                        backgroundColor: darkMode ? 'black' : 'white'
                    },
                    headerTitleStyle: {
                        fontFamily: 'Montserrat-Medium',
                        fontSize: ms(15),
                        color: darkMode ? 'white' : 'black'
                    },
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => dispatch(setDarkMode(!darkMode))}>
                            {darkMode ?
                                <Image source={require('./src/Assets/Images/moon.png')} style={{ width: ms((20)), height: ms(20), marginRight: ms(20) }} /> :
                                <Feather name='sun' style={{ fontSize: ms(20), marginRight: ms(20), color: 'black' }} />
                            }

                        </TouchableOpacity>
                    ),
                    tabBarStyle: {
                        height: ms(50),
                        backgroundColor: darkMode ? 'black' : 'white'
                    },
                    tabBarActiveTintColor: darkMode ? 'white' : 'black',
                    tabBarInactiveTintColor: 'grey',
                    tabBarShowLabel: false
                }}
            >
                <Tab.Screen name='CURRICULUM VITAE'
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return <Feather name='feather' color={color} size={size} />
                        }
                    }}
                    component={CV} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}