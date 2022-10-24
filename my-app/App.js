import React,{createContext} from "react";
import { ScrollView } from "native-base";
import { NativeBaseProvider, Box,Container } from "native-base";
import Login from "./components/Login";
import Home from "./components/Home";
import ListDoctor from "./components/ListDoctor";
import ProfileDoctor from "./components/ProfileDoctor";
import Post from "./components/PostList";
import BlogList from "./components/BlogList";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from "./Global/AppContext";

const Stack = createNativeStackNavigator();
const IpContext = createContext()

 const App= ()=> {
  const ip = '192.168.0.106'
 
  return (
    <AppProvider>
           <NativeBaseProvider>
              <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen name="Login" component={Login} />
                      <Stack.Screen name="Home" component={Home} />
                      <Stack.Screen name="ListDoctor" component={ListDoctor} />
                      <Stack.Screen name="ProfileDoctor" component={ProfileDoctor} />
                      <Stack.Screen name="Post" component={Post} />
                      <Stack.Screen name="BlogList" component={BlogList} />
                  </Stack.Navigator>
            </NavigationContainer>
   </NativeBaseProvider>
</AppProvider>
   
  );
}
export default App