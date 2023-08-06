import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chatlistscreen from "../screens/Chatlistscreen";
import dummy from "../screens/dummy";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


const Maintab=()=>{
const tab= createBottomTabNavigator();

const navigation=useNavigation();



    return(

        <tab.Navigator  screenOptions={{headerTitleAlign:"center"}}>
            <tab.Screen name="chats" component={Chatlistscreen} options={{
                tabBarIcon:({color,size})=>(
                    <Entypo name="chat" size={size} color={color} />
                ),headerRight:()=>(<Feather onPress={()=>{
               navigation.navigate("contact");
            }} style={{marginRight:10}} name="edit" size={24} color="blue" />)
            }}  />
            <tab.Screen name="calls" component={dummy} options={{
                tabBarIcon:({color,size})=>(
                  
                    <Ionicons name="call" size={size} color={color} />
                ),
            }}/>
            <tab.Screen name="Camera" component={dummy} options={{
                tabBarIcon:({color,size})=>(
           
                    <Entypo name="camera" size={size} color={color} />
                ),
            }}
            />
            <tab.Screen name="status" component={dummy} options={{
                tabBarIcon:({color,size})=>(
                
                    <FontAwesome5 name="whatsapp"size={size} color={color} />
                ),
            }}/>
            <tab.Screen name="setting" component={dummy}  options={{
                tabBarIcon:({color,size})=>(
     
                    <Feather name="settings"size={size} color={color} />
                ),
            }}/>
      

        </tab.Navigator>



    );
}

export default Maintab;


