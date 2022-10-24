import { View, Text,ScrollView ,Image,Platform} from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { Box ,HStack,IconButton} from 'native-base'
import { Button, Modal, Stack, FormControl, Input, Center, TextArea } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import CardPost from './CardPost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../Global/AppContext';

export default function Post() {
  const [post,setPost] = useState([])
  const [postTitle, setPostTitle]  = useState('')
  const [postBody, setPostBody]    = useState('')
  const [image,setImage]           = useState(null)
  const [token, setToken]          = useState('')
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const ip = useContext(AppContext)
 
  AsyncStorage.getItem('token')
  .then(data=>setToken(data))
  


  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

 const subMitPost =()=>{
    if(postTitle === '' || postBody === ''){
      alert('required `title` and `body`')
    }
    else{
      const data ={
          title:  postTitle,
          desc :  postBody
      } 

      fetch(`http://${ip}:7000/api/post`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
           'token'        : `${token}`
        },
        body: JSON.stringify(data),
  })

    }
    setOpen(false);
 }


  useEffect(()=>{
      fetch(`http://${ip}:7000/api/post/findAll`)
      .then(res=>res.json())
      .then(data=>{ 
        console.log(data.data)    
        setPost(data.data)
      })
     
  },[])


  return (
    <ScrollView>
   <Box alignItems="center" w="99%">
     

  {/* post modal start */}
  <Stack direction={{
      base: "column",
      md: "row"
    }} space={2}>
       
 
     <HStack space={12} >
          <Button size="sm" colorScheme="secondary" onPress={()=>openModal("center")}>
              <HStack>
                 <Text style={{color:'white'}}> Create </Text><MaterialIcons name="post-add" size={20} color="white" />
              </HStack>
            </Button>
            <Button size="sm" colorScheme="secondary">
              <HStack>
                 <Text style={{color:'white'}}> my post </Text><Zocial name="statusnet" size={20} color="white" />
              </HStack>
            </Button>
            <Button size="sm" colorScheme="primary">
              <HStack>
                <Text style={{color:'white'}}> filter </Text><Zocial name="statusnet" size={20} color="white" />
              </HStack>
            </Button>
        </HStack>




      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true} >
        <Modal.Content maxWidth="350" {...styles[placement]} style={{width:'100%'}}>
          {/* <Modal.CloseButton /> */}
          <Modal.Header>Write post here</Modal.Header>
          <Modal.Body>
             {/* <Button onPress={imageHandle}>Image</Button> */}
            <View style={{marginBottom: 10,marginTop:10}}>
                <TextArea 
                 placeholder="Title"
                 w="98%"
                 maxW="300"
                 style={{height:35}}
                 onChangeText={(title)=>setPostTitle(title)}
                 />
            </View>
           
            <View>
               <TextArea 
                placeholder="Body" 
                w="98%" 
                maxW="300" 
                onChangeText={(body)=>setPostBody(body)}
                />
            </View>

          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
            
              <Button onPress={subMitPost}>
                Post
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>


 {/* post modal end */}







  <Box alignItems="center" w="90%" style={{marginTop:10,marginBottom:10,marginRight:9}}>
      <HStack>
        <Input 
         w="100%"
         variant="outline"
         placeholder="search" 
         InputRightElement={ <EvilIcons name="search" size={24} color="black" />} 
         size={5} ml="2" color="muted.400" />
      </HStack>
  </Box>
          {
            post.map((post,index)=>(
              <View key={index}>
                <CardPost data={post}/>
              </View>
            ))
          }
            
  </Box>
  </ScrollView>
  )
}




const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto"
  },
  left: {
    marginLeft: 0,
    marginRight: "auto"
  },
  right: {
    marginLeft: "auto",
    marginRight: 0
  },
  center: {}
};
