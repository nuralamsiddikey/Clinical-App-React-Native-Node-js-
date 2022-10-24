import { ScrollView,View, Text ,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'


export default function BlogList() {
  const [blog , setBlog] = useState([])

  useEffect(()=>{
    fetch('http://localhost:7000/api/blog/get')
    .then(res=>res.json())
    .then(data=>{
         setBlog(data.data)
    })
  },[])

  return (
    <View>
        <ScrollView>
              {
                  blog.map(data=>(
                    <View style={styles.blogContent}>
                      <Text>{data.desc}</Text>
                    </View>
                 ))         
              }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
        blogContent:{
           backgroundColor:'#fff',
           marginBottom: 20
        }
})