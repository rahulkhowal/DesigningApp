import {StyleSheet,Dimensions} from 'react-native'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e0e0e",


    },
    buttonView: {
        height: deviceHeight / 3,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'space-evenly'


    },
    Value: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28

    },
    modelView: {
        width: deviceWidth - 30,
        height: deviceHeight / 3 + 50,
        borderRadius: 10,
        backgroundColor: 'white'

    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    closeView: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 15

    },
    modal: {
        flex: 1,
        alignItems: 'center',
        padding: 100,

        alignSelf: 'center'
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    },
    modalTitle: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    textInput: {
        width: deviceWidth / 2 + 100,
        height: 50,
        borderWidth: 0.3,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 20,
        padding: 8
    },
    enterbtn: {
        width: deviceWidth / 2 + 100,
        height: 60,
        borderWidth: 0.3,
        borderRadius: 10,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    filterView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15
    },
    filterViewtext: {
        color: '#DCDCDC',
        fontSize: 17
    },
    imagestyle: {
        width: 20,
        height: 20
    },
    filter:{
        justifyContent:'center',
        alignItems:'center'
    },
    filtermodalView:{
        width:250,
        backgroundColor:'white',
        top:deviceHeight/3-20
    },
ListView:{
    marginTop:15,
    marginBottom:15,
    alignItems:"center",
    justifyContent:'center'
}



})