import React from "react";

import Home from "./pages/Home";
import Catalog from './pages/Catalog'
import { Icon } from 'react-native-elements'
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from "./components/Search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function Router(){
    return (
        <NavigationContainer>
            {/* screenOptions={{headerShown: false}} */}
            <Tab.Navigator >
                <Tab.Screen
                    options={{
                        tabBarLabel: ({focused}) => <Text>Главная</Text>,
                        tabBarIcon: ({focused, color}) => <Icon name='home' color={focused? "#000" : "#909193"} />
                    }}
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    options={{
                        tabBarLabel: ({focused}) => <Text>Каталог</Text>,
                        tabBarIcon: ({focused, color}) => <Icon name='manage-search' color={focused? "#000" : "#909193"} />
                    }}
                    name="Catalog"
                    component={Catalog}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}