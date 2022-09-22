import React from "react";
import { NativeBaseProvider, Box,Container } from "native-base";
import { Button } from "native-base";

import Login from "./components/Login";
import Home from "./components/Home";
import ListDoctor from "./components/ListDoctor";
import ProfileDoctor from "./components/ProfileDoctor";
import Post from "./components/PostList";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NativeBaseProvider>
       <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListDoctor" component={ListDoctor} />
            <Stack.Screen name="ProfileDoctor" component={ProfileDoctor} />
            <Stack.Screen name="Post" component={Post} />
         </Stack.Navigator>
    </NavigationContainer>
   </NativeBaseProvider>
   
  );
}