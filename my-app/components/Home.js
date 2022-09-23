import { View,
     Text, 
     StyleSheet,
     ScrollView,
     TouchableOpacity ,
     Image,
     Button
    } from 'react-native'

import React from 'react'
import Footer from './Footer'
import TopHome from './TopHome'
import Specialist from './Specialist'

import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import { 
    HStack, 
    VStack,Center,
    Spinner
   } from 'native-base';


export default function Home() {
    const navigation = useNavigation()
   

    return (
        <View >
            <View style={styles.container}>
               <ScrollView>
                  
                <View style={styles.main_content}>             
                    <HStack space={10} justifyContent="center">

                        <View>
                            <VStack>
                                <TouchableOpacity style={styles.box} onPress={()=>console.log('clicked')}>
                                     <Center
                                      _text={{marginTop:'4%',color:'white'}}>
                                        <Fontisto name="doctor"
                                         size={24} color="#44bd32" 
                                         style={{marginTop:'10%',backgroundColor:'white',padding:10,borderRadius:50}} /> 
                                         Find doctor</Center>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.box}>
                                    <Center 
                                    _text={{marginTop:'4%',color:'white'}}>
                                        <FontAwesome5 name="blog" 
                                        size={24} color="#3c40c6" 
                                        style={{marginTop:'10%',backgroundColor:'white',padding:10,borderRadius:50}}/>
                                        See blog</Center>
                                </TouchableOpacity>
                           
                            </VStack>
                        </View>

                        <View>
                        <VStack>
                                <TouchableOpacity style={styles.box}  onPress={()=>navigation.navigate("Post")}>
                                    <Center 
                                        _text={{marginTop:'4%',color:'white'}}>
                                        <MaterialIcons name="post-add"
                                         size={24} color="#00a8ff"        
                                         style={{marginTop:'10%',backgroundColor:'white',padding:10,borderRadius:50}}/>
                                         Share Problem</Center>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.box}>
                                  <Center
                                       _text={{marginTop:'4%',color:'white'}}>
                                       <MaterialIcons name="date-range"
                                       size={24} color="#7158e2"
                                       style={{marginTop:'10%',backgroundColor:'white',padding:10,borderRadius:50}}/> 
                                       Appoint doctor</Center>

                                </TouchableOpacity>
                          
                            </VStack>
                        </View>

                      </HStack>
                      <Specialist/>
                   </View>
                </ScrollView>


                <View style={styles.footer}>
                    <Footer />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    top:{
       width: '90%',
       marginLeft: '5%',    
       borderBottomWidth: .5,
    },
    container: {
      height: "100%",
      backgroundColor:'#fff',
      width: '100%'
       
    },
    main_content:{
      paddingBottom:100,
      width: '100%',  
    },

    box:{
       height: 100,
       width:160 ,
       backgroundColor: '#ff7675',
       marginTop: 10,
       borderRadius: 10,
    //    shadowColor: "#171717",
    //        shadowOffset: { width: 2, height: 2 },
    //        shadowOpacity: 0.1,
    //        shadowRadius: 2,
    //        elevation: 5
    },
    footer: {
        position: 'absolute',
        bottom:0,
        left: 0 ,
        width: "100%"
    }
})