import { View, Text, FlatList ,StyleSheet} from 'react-native'
import React from 'react'
import chats from '../../assets/data/chats.json';
import Chatlist from '../component/Chatlist';

const Chatlistscreen = () => {
  return (
    <View style={styles.container}>
<FlatList    contentContainerStyle={{gap:10,paddingTop:3,}}data={chats} renderItem={({item})=>(
    <Chatlist item={item}/>
)
}/>
    </View>
  );
}

export default Chatlistscreen;
const styles = StyleSheet.create({
    container: {
      
     
     
     
      
    },
  });
  