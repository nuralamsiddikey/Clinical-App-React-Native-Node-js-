import { View, Text,Style,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native';
import { HStack,Center } from 'native-base'




export default function Specialist() {
  const navigation = useNavigation()
  return (
    <View style={styles.body}>

           <HStack  style={{padding:8}}><Text style={{color:'#95a5a6'}}>Specialist</Text></HStack>

            <HStack space={3} justifyContent="space-around">
               <TouchableOpacity onPress={()=>console.log('okkk')} style={styles.box} ><AntDesign name="medicinebox" size={24} color="black" /><Text style={{fontSize:9}}>Pediatrics</Text></TouchableOpacity>
               <TouchableOpacity onPress={()=>console.log('okkk')} style={styles.box} ><AntDesign name="medicinebox" size={24} color="black" /><Text style={{fontSize:9}}>Pediatrics</Text></TouchableOpacity>
               <TouchableOpacity onPress={()=>console.log('okkk')} style={styles.box} ><AntDesign name="medicinebox" size={24} color="black" /><Text style={{fontSize:9}}>Pediatrics</Text></TouchableOpacity>
               <TouchableOpacity onPress={()=>console.log('okkk')} style={styles.box} ><AntDesign name="medicinebox" size={24} color="black" /><Text style={{fontSize:9}}>Pediatrics</Text></TouchableOpacity>

               
            </HStack>

            <HStack space={3} justifyContent="space-around">
            <TouchableOpacity onPress={()=>console.log('okkk')} style={styles.box} ><AntDesign name="medicinebox" size={24} color="black" /><Text style={{fontSize:9}}>Nutritions</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('okkk')} style={styles.box} ><AntDesign name="medicinebox" size={24} color="black" /><Text style={{fontSize:9}}>Pediatrics</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('ListDoctor',{dept: 'medicine'})} style={styles.box} ><AntDesign name="medicinebox" size={24} color="black" /><Text style={{fontSize:9}}>Medicine</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('okkk')} style={styles.box} ><AntDesign name="medicinebox" size={24} color="black" style={{textAlign:'center'}}/><Text style={{fontSize:9,textAlign:'center'}}>Darmatology</Text></TouchableOpacity>


           </HStack>

    </View>
  )
}

const styles= StyleSheet.create({
    box:{
        height: 60,
        width: 72,
        backgroundColor:'#ecf0f1',
        borderRadius:6,
        marginTop:10,
        padding:10,
       
        
       
    },
    body:{
        paddingBottom:20,
        paddingTop:20,
        width: '98%',
        marginLeft:'1%'
    }
})
