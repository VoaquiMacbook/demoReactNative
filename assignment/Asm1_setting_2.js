import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Asm1_setting_2 = () => {
    return (
        <View style={{marginTop: 20}}>
            {/* <Text style={asmStyle.txt_color}>Asm1_setting_2</Text> */}
            <View style={[asmStyle.vertical]}>
                <View style={[asmStyle.horizontal]}>
                    <View>
                        <TouchableOpacity style={[asmStyle.btn_setting]}>
                            <View style={asmStyle.img_container}>
                                <Image style={asmStyle.img} source={require('../assignment/assets/images/ic_history.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[asmStyle.vertical, asmStyle.flex, asmStyle.row2_mg]}>
                        <Text style={asmStyle.txt_color_2}>History</Text>
                    </View>
                    <View style={[asmStyle.vertical]}>
                        <View style={asmStyle.img_container}>
                            <Image style={asmStyle.img_icon} source={require('../assignment/assets/images/arrow_right.png')}></Image>
                        </View>
                    </View>
                </View>
                <View style={[asmStyle.horizontal]}>
                    <View>
                        <TouchableOpacity style={[asmStyle.btn_setting]}>
                            <View style={asmStyle.img_container}>
                                <Image style={asmStyle.img} source={require('../assignment/assets/images/ic_account.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[asmStyle.vertical, asmStyle.flex, asmStyle.row2_mg]}>
                        <Text style={asmStyle.txt_color_2}>Personal Details</Text>
                    </View>
                    <View style={[asmStyle.vertical]}>
                        <View style={asmStyle.img_container}>
                            <Image style={asmStyle.img_icon} source={require('../assignment/assets/images/arrow_right.png')}></Image>
                        </View>
                    </View>
                </View>
                <View style={[asmStyle.horizontal]}>
                    <View>
                        <TouchableOpacity style={[asmStyle.btn_setting]}>
                            <View style={asmStyle.img_container}>
                                <Image style={asmStyle.img} source={require('../assignment/assets/images/ic_address.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[asmStyle.vertical, asmStyle.flex, asmStyle.row2_mg]}>
                        <Text style={asmStyle.txt_color_2}>Address</Text>
                    </View>
                    <View style={[asmStyle.vertical]}>
                        <View style={asmStyle.img_container}>
                            <Image style={asmStyle.img_icon} source={require('../assignment/assets/images/arrow_right.png')}></Image>
                        </View>
                    </View>
                </View>
                <View style={[asmStyle.horizontal]}>
                    <View>
                        <TouchableOpacity style={[asmStyle.btn_setting]}>
                            <View style={asmStyle.img_container}>
                                <Image style={asmStyle.img} source={require('../assignment/assets/images/ic_payment.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[asmStyle.vertical, asmStyle.flex, asmStyle.row2_mg]}>
                        <Text style={asmStyle.txt_color_2}>Payment Method</Text>
                    </View>
                    <View style={[asmStyle.vertical]}>
                        <View style={asmStyle.img_container}>
                            <Image style={asmStyle.img_icon} source={require('../assignment/assets/images/arrow_right.png')}></Image>
                        </View>
                    </View>
                </View>
                <View style={[asmStyle.horizontal]}>
                    <View>
                        <TouchableOpacity style={[asmStyle.btn_setting]}>
                            <View style={asmStyle.img_container}>
                                <Image style={asmStyle.img} source={require('../assignment/assets/images/ic_about.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[asmStyle.vertical, asmStyle.flex, asmStyle.row2_mg]}>
                        <Text style={asmStyle.txt_color_2}>About</Text>
                    </View>
                    <View style={[asmStyle.vertical]}>
                        <View style={asmStyle.img_container}>
                            <Image style={asmStyle.img_icon} source={require('../assignment/assets/images/arrow_right.png')}></Image>
                        </View>
                    </View>
                </View>
                <View style={[asmStyle.horizontal]}>
                    <View>
                        <TouchableOpacity style={[asmStyle.btn_setting]}>
                            <View style={asmStyle.img_container}>
                                <Image style={asmStyle.img} source={require('../assignment/assets/images/ic_help.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[asmStyle.vertical, asmStyle.flex, asmStyle.row2_mg]}>
                        <Text style={asmStyle.txt_color_2}>Help</Text>
                    </View>
                    <View style={[asmStyle.vertical]}>
                        <View style={asmStyle.img_container}>
                            <Image style={asmStyle.img_icon} source={require('../assignment/assets/images/arrow_right.png')}></Image>
                        </View>
                    </View>
                </View>
                <View style={[asmStyle.horizontal]}>
                    <View>
                        <TouchableOpacity style={[asmStyle.btn_setting]}>
                            <View style={asmStyle.img_container}>
                                <Image style={asmStyle.img} source={require('../assignment/assets/images/ic_logout.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[asmStyle.vertical, asmStyle.flex, asmStyle.row2_mg]}>
                        <Text style={asmStyle.txt_color_2}>Log out</Text>
                    </View>
                    <View style={[asmStyle.vertical]}>
                        <View style={asmStyle.img_container}>
                            <Image style={asmStyle.img_icon} source={require('../assignment/assets/images/arrow_right.png')}></Image>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Asm1_setting_2
const asmStyle = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    container2: {
        backgroundColor: 'green'
    },
    // custom text
    txt_color: {
        color: 'white',

    },
    txt_color_2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 30,
    },
    // cloumn
    vertical: {
        flexDirection: 'column',
        height: '40%',
    },
    horizontal: {
        flexDirection: 'row'
    },
    // flex
    flex: {
        flex: 1,
    },
    // custom button
    btn_setting: {
        width: 35,
        height: 35,
        backgroundColor: '#D1784233',
        borderRadius: 18,
        marginStart: 10,
    },
    // custom img
    img: {
        width: 20,
        height: 20,
        marginVertical: '20%',
    },
    img_container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    img_icon: {
        width: 12,
        height: 12,
        marginEnd: 25,
        marginVertical: '35%',
    },
    // custom Row 2
    row2_mg: {
        marginStart: 40,
    }

})