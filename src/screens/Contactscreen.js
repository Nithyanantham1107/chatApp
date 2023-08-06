import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Chatlist from '../component/Chatlist';
import chats from '../../assets/data/chats.json';
import Contactlist from '../component/Contactlist';

const Contactscreen = () => {
  return (
   < View >
    <FlatList    contentContainerStyle={{gap:10,paddingTop:3,}} data={chats} renderItem={({item})=>(
        <Contactlist item={item}/>
    )
    }/>
        </View>
  );
}

export default Contactscreen;