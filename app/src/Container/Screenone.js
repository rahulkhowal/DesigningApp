import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
const Screenone=({navigtaion})=>{
    return(
        <View style={styles.container}> 
           <Text style={styles.text}>
               This is  example Screen
           </Text>
        </View>
    )
}
export default Screenone
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#0e0e0e",
        
    },
    text:{
        color:'white'
    }
})