import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack,TextArea } from "native-base";
import Comment from "./CommentActionSheet";

const CardPost = (props) => {
  
  return <Box  alignItems="center" style={{marginBottom:50,minWidth:'100%'}}>
      <Box style={{minWidth:'100%'}} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "yellow",
      width:'100%'
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
      {props.data.image &&   <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: `http://192.168.55.184:7000/${props.data.image}`
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>}
        <Stack p="4" space={3}  >
          <Stack space={2}>
            <Heading size="md" ml="-1" >
              <Text>{props.data.title}</Text>
            </Heading>
           
          </Stack>
          <Text fontWeight="400">
            <Text>{props.data.desc}</Text>
          </Text>

          <HStack alignItems="center" space={4} justifyContent="space-between">
             <Comment data = {props.data}/>
             <Text>5 min ago</Text>
          </HStack>

        </Stack>
      </Box>
    </Box>;
};

   
export default CardPost