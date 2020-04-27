import React, { useEffect } from 'react'
import {Text,Image,Dimensions,StyleSheet,Platform} from 'react-native'
import Screenone from './app/src/Container/Screenone'
import ScreenTwo from './app/src/Container/ScreenTwo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const Tab=createBottomTabNavigator()
const TabNavigator = () => {
 
  return (
      <Tab.Navigator
     tabBarOptions = {{
        showIcon: true,
        style: {
          backgroundColor: '#222220',
          width:deviceWidth,
          height:70,  
          paddingLeft:32,
          paddingRight:32,
          paddingTop:Platform.OS==='ios'? 22:0
          
        },
      

      }
    }
   >       
    <Tab.Screen name="Screenone" component={Screenone} 
                options={{
                  tabBarLabel: '',
                  tabBarIcon: ({ focused }) => (
                    focused ?
                    <Image style={styles.FocusedImage} source={require('./app/src/assets/block.png')} />:
                    <Image style={styles.UnFocusedImage} source={require('./app/src/assets/block.png')} />
                  ),
                }}
               />
              <Tab.Screen name="Screen2" component={ScreenTwo}
               options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                  (focused) ?
                  <Image style={styles.FocusedImage} source={require('./app/src/assets/circle.png')} />:
                  <Image style={styles.UnFocusedImage} source={require('./app/src/assets/circle.png')} />
                ),
              }}
              />
               <Tab.Screen name="Screen3" component={Screenone}
               options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                 (focused)?
                    <Image style={styles.FocusedImage} source={require('./app/src/assets/list.png')} />:
                    <Image style={styles.UnFocusedImage} source={require('./app/src/assets/list.png')} />
                ),
              }}
              />
               <Tab.Screen name="Screen4" component={Screenone}
               options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                  (focused) ?
                  <Image style={styles.FocusedImage} source={require('./app/src/assets/person.png')} /> : 
                  <Image style={styles.UnFocusedImage} source={require('./app/src/assets/person.png')}/>
                ),
              }}
              />
              
        
         </Tab.Navigator>
    )
}
export default TabNavigator
const styles=StyleSheet.create({
    FocusedImage:{
        height:28,
        width:28
    },
    UnFocusedImage:{
        height:18,
        width:20,
    }
})