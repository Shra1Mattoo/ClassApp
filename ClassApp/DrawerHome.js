import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/AntDesign"
import LoginPage from './LoginPage';
import Signup from './Signup';
import BottomNav from './BottomNav';


const Drawer = createDrawerNavigator();
export default function DrawerHome() {
    
        return (


            <Drawer.Navigator>

                <Drawer.Screen name="Sectionlist" component={BottomNav}
                    options={{
                        title: 'Home', headerStatusBarHeight: 40, headerTransparent: true,

                        drawerIcon: ({ focused, size }) => (
                            <Icon name='home' size={focused ? 30 : 25}
                                color={focused ? '#3a86ff' : 'grey'} />
                        ),
                    }}
                />

                <Drawer.Screen name="LoginPage" component={LoginPage}
                    options={{
                        title: 'Login Page', headerTitle: '', headerStatusBarHeight: 40, headerTransparent: true,

                        drawerIcon: ({ focused, size }) => (
                            <Icon name='user' size={focused ? 30 : 25}
                                color={focused ? '#3a86ff' : 'grey'} />
                        ),
                    }}
                />
                <Drawer.Screen name="Signup" component={Signup}
                    options={{
                        title: 'SignUp Page', headerTitle: '', headerStatusBarHeight: 40, headerTransparent: true,
                        drawerIcon: ({ focused, size }) => (
                            <Icon name='adduser' size={focused ? 30 : 25}
                                color={focused ? '#3a86ff' : 'grey'} />
                        ),
                    }}
                />


            </Drawer.Navigator>
        );
    };