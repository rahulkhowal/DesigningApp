import React from 'react'
import { Text, View, FlatList, Image, StyleSheet ,Dimensions} from 'react-native'
import Images from '../common/Images'
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
const List = (props) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return (
        <View>
            <FlatList
                data={props.arr}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View key={item.id} style={styles.ListItem}>
                        <View style={styles.viewone}>
                            <Image style={styles.imagestyle} source={props.title==='Deposit'?Images.ListItem.uparrow:Images.ListItem.downarrow} />
                            <View style={styles.textView}>
                                <Text style={styles.text}>
                                    {props.title}
                               </Text>
                                <Text style={{ color: 'gray' }}>
                                    {item.Date.getDay()}{' '}
                                    {monthNames[item.Date.getMonth()]}
                                </Text>

                            </View>
                        </View>

                        <View>
                            <Text style={styles.text}>
                                ${item.amount}
                            </Text>
                        </View>

                    </View>
                )

                }
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    ListItem: {
        width: deviceWidth,
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 15,
        justifyContent: 'space-between',
        paddingRight: 15,
        height: 60,
        paddingBottom: 10,
        paddingTop: 10
    },
    viewone: {
        flexDirection: 'row'
    },
    imagestyle: {
        width: 24,
        height: 26
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    text:{ 
        fontWeight: 'bold', 
        fontSize: 18, 
        color: 'white', 
    },
   
})
export default List