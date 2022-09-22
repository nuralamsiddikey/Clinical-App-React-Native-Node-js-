import React from 'react';
import { View,StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';


import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Footer() {
    const [selected, setSelected] = React.useState(1);
    return (
        <View>
            <View style = {styles.container}>
              <AntDesign name="home" size={24} color="black" />
              <Ionicons name="notifications-outline" size={24} color="black" />
              <MaterialIcons name="messenger-outline" size={24} color="black" />
              <AntDesign name="menuunfold" size={24} color="black" />
            </View>
        </View>
    )
      
  }

 const styles = StyleSheet.create({
      container:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'rgb(249, 251, 253)',
        paddingTop:6,
        paddingBottom:5
      }
 })





  export default Footer