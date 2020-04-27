import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const ButtonItem = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.Btn} onPress={props.func}>
                <Text style={styles.txt}>
                    {props.title}
             </Text>
            </TouchableOpacity>
        </View >
    )
}
export default ButtonItem
const styles=StyleSheet.create({
Btn:{ 
    width: deviceWidth / 2 - 30, 
    height: 60, 
    justifyContent: "center", 
    alignItems: 'center', borderRadius: 10,
     backgroundColor: 'white',
      margin: 5
     },
     txt:{
        fontWeight: 'bold',
        fontSize:19
     }
})