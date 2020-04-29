import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.func}>
                <Image style={styles.backImage} source={require('../../../assets/back.png')} />
            </TouchableOpacity>
            <View style={styles.title}>
                <Image source={require('../../../assets/doller.png')} style={styles.DollerImage} />
                <Text style={styles.titletext}>
                    {props.title}
                </Text>
            </View>

        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 30,
        height: 80,
        borderBottomColor: 'gray',
        borderWidth: 0.3, alignSelf: 'center',
        flexDirection: "row",
        alignItems: 'center',
        marginTop:20
    },
    backImage: {
        width: 28,
        height: 27
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: deviceWidth - 60,
        flexDirection: 'row'
    },
    DollerImage:{
         height: 25, 
         width: 25, 
         marginRight: 10 
        },
        titletext:{ 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: 25 }

        
})