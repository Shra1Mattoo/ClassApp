import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './ClassApp/BottomNav';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{ headerShown: false, headerTitle: "", headerTransparent: false }} name='DrawerHome' getComponent={() => require('./ClassApp/DrawerHome').default} />
                <Stack.Screen options={{ headerShown: false }} name="LoginApp" getComponent={() => require('./ClassApp/LoginPage').default} />
                <Stack.Screen options={{ headerShown: false, headerTitle: "", headerTransparent: false }} name="SectionList" getComponent={() => require('./ClassApp/Section-List').default} />
                <Stack.Screen options={{ headerTitle: "", headerTransparent: true }} name="Signup" getComponent={() => require('./ClassApp/Signup').default} />
                <Stack.Screen options={{ headerShown: false, headerTitle: "", headerTransparent: false }} name='BottomNav' component={BottomNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;