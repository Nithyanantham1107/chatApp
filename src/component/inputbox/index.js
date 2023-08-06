import { View, Text, TextInput ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Message from '../../message';

const  Inputbox= () => {
    const[ismessage,setmessage]=useState("");
    const send=()=>{
        console.warn(ismessage);
    }
  return (
    <View style={styles.container}>
        <AntDesign  name="plus" size={30} color="blue" />
 <TextInput style={styles.input} value={ismessage} onChangeText={setmessage}placeholder='type here!!'/>
 <Ionicons onPress={send} style={{backgroundColor:"blue",borderRadius:15,padding:10,margin:2}}name="send-sharp" size={30} color="white" />

    </View>
  );
}

export default   Inputbox;

const styles = StyleSheet.create({
    container: {
     flexDirection:'row',
     backgroundColor:"#F4EBEB",
     alignItems:"center"

     
     
      
    },
    input:{
        backgroundColor:'white',flex:1,
        borderRadius:15,
        height:40,
        marginRight:20,
        color:"gray"

        

    }
  });
  