import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions, Image, Modal, Button, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Header from '../Components/Header'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import List from '../Components/List'
import ButtonItem from '../Components/Button'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const ScreenoneTwo = ({ navigtaion }) => {
    const [value, setValue] = useState(100)
    const [modelDeposit, setModelDeposit] = useState(false)
    const [modelWithdraw, setModelWithdraw] = useState(false)
    const [item, setItem] = useState('')
    const [depositArray, setDepositArray] = useState([])
    const [withdrawArray,setWithdrawArray]= useState([])
    const [shownarray,setShownarray]=useState('deposit')
    const [filterpopup,setFilterpopup]=useState(false)

    const ButtonView = () => {

        return (
            <View style={styles.buttonView}>
                <Text style={styles.Value}>
                    ${value}
                </Text>
                <View style={styles.btnView}>
                    <ButtonItem title="Deposit" func={_Deposit} />
                    <ButtonItem title="Withdraw" func={_Withdraw} />
                </View>

            </View>
        )
    }
    const _Deposit = () => {
        setModelDeposit(true)
    }
    const _Withdraw = () => {
        setModelWithdraw(true)
    }
    const _shownarraywithdraw=()=>{
        setFilterpopup(false) 
        setShownarray('withdraw')
    }
    const _shownarraydeposit=()=>{
        setFilterpopup(false)
        setShownarray('deposit')
    }
    const ModalInput = () => {
        return (
            <Modal animationType={"slide"} transparent={true}
                visible={modelDeposit || modelWithdraw}
                onRequestClose={() => { console.log("Modal has been closed.") }}>
                <View style={styles.modal}>
                    <View style={styles.modelView}>
                        <View style={styles.closeView}>
                            <TouchableOpacity onPress={() => modelDeposit ? setModelDeposit(false) : setModelWithdraw(false)}><Text>close</Text></TouchableOpacity>
                        </View>
                        <View style={styles.modalTitle}>
                            <Text style={styles.titleText}>
                                {modelDeposit ? 'Deposit' : 'Withdraw'}
                            </Text>
                            <TextInput
                                placeholder="Please enter Amount"
                                style={styles.textInput}
                                maxLength={5}
                                keyboardType="number-pad"
                                returnKeyType='done'
                                value={item}
                                onChangeText={(value) => setItem(value)}
                            />
                            <TouchableOpacity style={styles.enterbtn} onPress={() => item === '' || (modelDeposit ? null : parseInt(item) > value ? alert('you cannot withdraw the enter amount') : null) ? alert('Please enter the amount') : (modelDeposit ? _DepositAmount() : parseInt(item) > value ? null : _WithDrawAmount())}>
                                <Text style={[styles.Value, { fontSize: 22 }]}>
                                    Enter
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </Modal>


        )
    }
    const FilterModal = () => {
        return (
            <Modal animationType={"slide"} transparent={true}
                visible={filterpopup}
                onRequestClose={() => { console.log("Modal has been closed.") }}>
                <View style={styles.modal}>
                    <View style={styles.filtermodalView}>

                     <View style={styles.filter}>
                         <Text style={[styles.text,{fontSize:18,}]}>
                             Please choose the Filter  
                         </Text>
                         <TouchableOpacity style={styles.ListView} onPress={()=>_shownarraywithdraw()}>
                             <Text style={{fontSize:18}}>
                                 WITHDRAW TRANSACTIONS
                             </Text>

                         </TouchableOpacity>
                         <TouchableOpacity style={styles.ListView} onPress={()=>_shownarraydeposit()}>
                             <Text style={{fontSize:18}}>
                                 DEPOSIT TRANSACTIONS
                             </Text>

                         </TouchableOpacity>
                     </View>
                    </View>

                </View>
            </Modal>


        )
    }
    const _DepositAmount = () => {
        const Deposit = depositArray
        setModelDeposit(false)
        setValue(parseInt(item) + value)
        const obj = { "id": Math.random() * Math.floor(100), "Date": new Date(), "amount": parseInt(item) }
        Deposit.push(obj)
        const b = Deposit.sort(function (a, b) {
            return a.amount - b.amount
        })
        setDepositArray(b)
        console.log(b)
        setItem('')
    }
    const _WithDrawAmount = () => {
        const Withdraw = withdrawArray
        setModelWithdraw(false)
        setValue(value - parseInt(item))
        const obj = { "id": Math.random() * Math.floor(100), "Date": new Date(), "amount": parseInt(item) }
        Withdraw.push(obj)
        const b = Withdraw.sort(function (a, b) {
            return a.amount - b.amount
        })
        setWithdrawArray(b)
        console.log(b, typeof (b[0].Date))
        setItem('')
    }
    return (
        <ScrollView style={styles.container}>
            <Header title="US Doller" />
            {ButtonView()}
            <View>
            {ModalInput()}
            </View>
            <View style={styles.filterView}>
                <Text style={styles.filterViewtext}>
                    RECENT TRANSACTIONS
                  </Text>
                <TouchableOpacity  onPress={()=>setFilterpopup(true)}>
                    <Image style={styles.imagestyle} source={require('../assets/filter.png')} />
                </TouchableOpacity>
            </View>
            {FilterModal()}
            {shownarray==='deposit'?<List arr={depositArray} title="Deposit"/>:<List arr={withdrawArray} title="Withdraw" />}

        </ScrollView>
    )
}
export default ScreenoneTwo
const styles = StyleSheet.create({
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