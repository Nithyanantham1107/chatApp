import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Chatlist from './src/component/Chatlist';

import Navigation from './src/navigation/index';





export default function App() {
  return (
    <View style={styles.container}>
  <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:"whitesmoke",
    
   
   
   
    
  },
});
