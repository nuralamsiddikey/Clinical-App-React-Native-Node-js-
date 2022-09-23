import { View, Text,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { HStack } from 'native-base';

import Doctor from './Doctor';

export default function ListDoctor({route}) {
    
    const [doctor, setDoctor] = useState([])
   
     const dept = route.params.dept
   
     useEffect(()=>{
            fetch(`http://192.168.0.103:7000/api/user/find/${dept}`)
            .then(res=>res.json())
            .then(data=>{
                setDoctor(data.data)
                   
            })
            .catch(err=>console.log(err))
     },[])
 
          
 if(doctor){
   
   return (
      <View>
         <View>
            {
              doctor.map(doctor=>(
                   <View>
                       <Doctor data={doctor}/>
                   </View>
              ))
            }
         </View>
      </View>
    )

 }
 
}