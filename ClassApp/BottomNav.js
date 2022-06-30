
import Icon from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Entypo"
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Sectionlist from './Section-List';
import flat1 from "./Flat-List"

const Tab = createBottomTabNavigator();

class BottomNav extends Component {
    render() {
        return (

            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={Sectionlist}
                    options={{
                        title: 'Home',

                        tabBarIcon: ({ focused, size }) => (
                            <Icon name='home' size={focused ? 30 : 25}
                                color={focused ? '#3a86ff' : 'grey'} />
                        ),
                    }}
                />

                <Tab.Screen name="Flat-List" component={flat1}
                    options={{
                        title: 'Flat List',

                        tabBarIcon: ({ focused, size }) => (
                            <Icon2 name='list' size={focused ? 30 : 25}
                                color={focused ? '#3a86ff' : 'grey'} />
                        ),
                    }}
                />
            </Tab.Navigator>

        );
    };
};
export default BottomNav;