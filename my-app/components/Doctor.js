import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function Doctor(props) {
 
    const navigation = useNavigation()
    return (
        <View >
            <HStack style={styles.container}>
                <Image style={styles.image} source={{ uri:`http://192.168.0.103:7000/${props.data.image}` }}  />
                 <View style={styles.right_content}>
                     <Text
                      style={{fontWeight:'600'}}
                       >
                        {props.data.fullName}
                     </Text>

                    <Text >{props.data.dept}</Text>

                     <Text 
                        style={{color:'blue'}}
                        onPress={()=>navigation.navigate('ProfileDoctor')}>
                        See profile
                     </Text>
                   
                </View>
            </HStack>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       backgroundColor:'#fff',
       marginBottom: 10,
       padding: 10,
       width: '98%',
       marginLeft:'1%',
       borderRadius: 10
    },
    right_content:{
        marginLeft:20
    },
    image:{
        width: 60,
        height: 60,
        borderRadius:10
    }
})