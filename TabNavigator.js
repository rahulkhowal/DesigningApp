import React, { useEffect } from 'react'
import {Text,Image,Dimensions,StyleSheet,Platform} from 'react-native'
import Screenone from './app/src/Container/Screenone'
import ScreenTwo from './app/src/Container/ScreenTwo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from './app/src/common/Images'
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
                    <Image style={styles.FocusedImage} source={Images.TabIcons.firstIcon} />:
                    <Image style={styles.UnFocusedImage} source={Images.TabIcons.firstIcon} />
                  ),
                }}
               />
              <Tab.Screen name="Screen2" component={ScreenTwo}
               options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                  (focused) ?
                  <Image style={styles.FocusedImage} source={Images.TabIcons.secondIcon} />:
                  <Image style={styles.UnFocusedImage} source={Images.TabIcons.secondIcon} />
                ),
              }}
              />
               <Tab.Screen name="Screen3" component={Screenone}
               options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                 (focused)?
                    <Image style={styles.FocusedImage} source={Images.TabIcons.thirdIcon} />:
                    <Image style={styles.UnFocusedImage} source={Images.TabIcons.thirdIcon} />
                ),
              }}
              />
               <Tab.Screen name="Screen4" component={Screenone}
               options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                  (focused) ?
                  <Image style={styles.FocusedImage} source={Images.TabIcons.fourthIcon} /> : 
                  <Image style={styles.UnFocusedImage} source={Images.TabIcons.fourthIcon}/>
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