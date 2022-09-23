import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
  Button,
  Alert,
  HStack
} from "native-base";



import { View, Text, StyleSheet,AsyncStorageStatic } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  const [show, setShow] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [alert, setAlert] = React.useState(false)
  const [alert2, setAlert2] = React.useState(false)

  const navigation = useNavigation()
  const data ={email,password}


  const handleInput = async() => {
   
    if (email === '' || password === '') {
      setAlert(true)
    }
    else {
      fetch('http://192.168.0.103:7000/api/user/login',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
      })
       .then(res=>res.json())
       .then(data=>{
           if(data.error == false){
          
            AsyncStorage.setItem('token', data.token)
            return (navigation.navigate('Home'))
           }
           else{
            setAlert2(true)
           }
       })
       
     
    }
  }



  return (
    <View style={styles.body}>
      <Stack style={styles.container} space={4} w="100%" alignItems="center">

        {alert && <Alert maxW="400" status="info" colorScheme="info" w="99%">
          <HStack space={2} flexShrink={1} >
            <Alert.Icon />
            <Text fontSize="md" color="coolGray.800" >
              Required all fields
            </Text>
          </HStack>
        </Alert>}

        {alert2 && <Alert maxW="400" status="info" colorScheme="info" w="99%">
          <HStack space={2} flexShrink={1} >
            <Alert.Icon />
            <Text fontSize="md" color="coolGray.800" >
              Unauthorized user!
            </Text>
          </HStack>
        </Alert>}




        <Input w={{
          base: "98%",
          md: "25%"
        }}
          InputLeftElement={<Icon as={<MaterialIcons name="person" />}
          size={5} ml="2" color="muted.400" />}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          onFocus={()=>{
            setAlert(false)
            setAlert2(false)
          }}
        />

        <Input w={{
          base: "98%",
          md: "25%"
        }}
          onChangeText={(password) => setPassword(password)}
          onFocus={()=>{
            setAlert(false)
            setAlert2(false)
          }}
          type={show ? "text" : "password"}
          InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
              size={5} mr="2" color="muted.400" />

          </Pressable>} placeholder="Password" />

        <Button
          onPress={handleInput}
          style={styles.button}
        >Login</Button>

      </Stack>

    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(246, 248, 250)',
    height: '100%'
  },
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
    width: '90%',
    marginLeft: '5%',
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  button: {
    width: '98%'
  }
})