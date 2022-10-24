import React,{useContext} from "react";
import { Button, Actionsheet, useDisclose, TextArea, Box, Center, HStack } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from "../Global/AppContext";

 export default function Comment(props) {
   const [token,setToken] = React.useState('')
   const [comment, setComment] = React.useState('')
   const {
        isOpen,
        onOpen,
        onClose
   } = useDisclose();
    
   const ip = useContext(AppContext)
   
  AsyncStorage.getItem('token')
  .then(data=>setToken(data))

 const postId = props.data._id

 const handleComment = ()=>{
       if(comment != ""){
           const data = {postId,comment}
           fetch(`http://${ip}:7000/api/post/comment`,{
              method:"POST",
              headers:{
                 'Content-type': 'application/json',
                 'token':`${token}`
              },
              body:JSON.stringify(data)
           })
           .then(res=>res.json())
           .then(data=>{
                if(data.error == false){
                     alert('successfully posted the comment')
                }
           })
       }
 }




  return <Center>
    <FontAwesome onPress={onOpen} name="commenting-o" size={24} color="black" />
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
            <HStack alignItems="center">
                  <TextArea h={10}
                        placeholder="Text Area Placeholder"
                        w="75%" 
                        maxW="300"
                        onChangeText={(e)=>setComment(e)}
                  />
                  <MaterialCommunityIcons 
                        onPress={handleComment} 
                        name="send-circle-outline" 
                        size={30} color="black" 
                        style={{marginLeft:10}}
                  />  
            </HStack>

          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>;
}
