import { View, Text, FlatList,ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import messages from "../../assets/data/messages.json"

import Message from "../message/index";
import Bg from "../../assets/images/BG.png";
import Inputbox from '../component/inputbox';
import { useNavigation, useRoute } from '@react-navigation/native';

const Chatscreen = () => {
  const navigation=useNavigation();
  const route=useRoute();
  useEffect(()=>{
    navigation.setOptions({title:route.params.name});

  },[route.params.name]);

 
  return (
<ImageBackground style={{flex:1}} source={Bg}>
      <FlatList data={messages} inverted renderItem={({item})=>(<Message chat={item}/>)} />
      <Inputbox/>
      </ImageBackground>
  );
}

export default Chatscreen;