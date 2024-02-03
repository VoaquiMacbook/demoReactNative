import React, { useEffect, useState } from 'react';
import {
    View, Text,
    TouchableOpacity,
    Image, StyleSheet, Animated, FlatList,
    ImageBackground
} from 'react-native';
import AxiosInstance from '../../src/app/authen/helpers/AxiosInstance';


const Lab8List = (props) => {
    const { navigation } = props
    const [users, setUsers] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    const [isAnimating, setAnimating] = useState(false);
    const [opacityValue, setOpacityValue] = useState(new Animated.Value(0));

    // gọi APi đổ danh sách 
    useEffect(() => {
        const getUsers = async () => {
            try {
                // const response = await AxiosInstance().get('/users')
                // setUsers(response.data)
                // console.log(data);
                const response = await fetch('https://65bd2c98b51f9b29e9330ae6.mockapi.io/users')
                const data = await response.json();
                setUsers(data);
                setIsDeleted(false); // hàm cập xóa
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, [isDeleted]);


    // fucntion delete 
    const onPressDelete = async (id) => {
        // dùng fetch để gội API delete theo id
        try {
            const response = await fetch(`https://65bd2c98b51f9b29e9330ae6.mockapi.io/users/${id}`, { method: 'DELETE' });
            const data = await response.json();
            // console.log(data);
            setIsDeleted(!isDeleted); // hàm cập xóa
        } catch (error) {
            console.log(error);
        }

    }



    // Animated
    const handleButtonClick = () => {
        if (!isAnimating) {
            setAnimating(true);
            Animated.timing(opacityValue, {
                toValue: 5,
                duration: 6000,
                useNativeDriver: false,
            }).start(() => {
                setAnimating(false);
                opacityValue.setValue(0);
            });
        }
    };
    const nextL8detail = () => {
        if (!isAnimating) {
            setAnimating(true);
            Animated.timing(opacityValue, {
                toValue: 5,
                duration: 5000,
                useNativeDriver: false,
            }).start(() => {
                setAnimating(false);
                opacityValue.setValue(0);
                navigation.navigate('Lab8Detail');
            });
        }
    };
    renderItem = ({ item }) => {
        const { id, name, birthday, avatar } = item;
        // định dạng ngày tháng sinh
        const formatBirthday = (birthday) => {
            const date = new Date(birthday);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }

        return (
            <View style={styles.fll_container} >
                <ImageBackground source={require('../../assets/images/git_xe.png')} style={styles.fll_imgBg} >
                    <Text style={styles.fll_txtName}>{name}</Text>
                    <Text style={styles.fll_txtBirthday}>birthday:</Text>
                    <Text style={styles.fll_txtFmbd}>{formatBirthday(birthday)}</Text>
                    <View style={styles.fll_btn_container}>
                        <TouchableOpacity style={styles.fll_btnUpdate} onPress={() => navigation.navigate('Lab8Update', { id: id })}>
                            <Text style={styles.fll_txtUpdate}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.fll_btnDelete}>
                            <Text style={styles.fll_txtDelete} onPress={() => onPressDelete(id)}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>
        )
    }


    return (
        <View>
            <TouchableOpacity style={styles.order} onPress={nextL8detail}>
                <Image style={styles.fll_img} source={require('../../assets/images/git_right.png')} />
                <Animated.Text style={[styles.span, { opacity: opacityValue }]}>
                    <Image style={styles.image} source={require('../../assets/images/git_next.png')} />
                </Animated.Text>
            </TouchableOpacity>
            <FlatList
                data={users}
                // renderItem={({item}) =>(
                //     <TouchableOpacity onPress={() => navigation.navigate('Lab8Detail', {id: item.id})}>
                //         <Text>{item.name}</Text>
                //     </TouchableOpacity>
                // )}
                renderItem={renderItem}
            // keyExtractor={item = item.id}
            >

            </FlatList>
        </View>

    );
};

const styles = StyleSheet.create({
    order: {
        // backgroundColor: '#1C212E',
        position: 'relative',
        height: 50,
        width: 100,
        borderRadius: 50,
        overflow: 'hidden',
        margin: 10,
    },
    span: {
        position: 'absolute',
        color: '#FFF',
    },

    image: {
        width: 100,
        height: 50,
        resizeMode: 'cover',
        // position: 'absolute',
        borderRadius: 50,

    },
    // custom FlatList
    fll_container: {
        marginBottom: 10
    },
    fll_imgBg: {
        padding: 10
    },
    fll_img: {
        width: 80, height: 40,
        borderRadius: 50,
        shadowOpacity: 10, shadowRadius: 10
    },
    fll_txtName: {
        alignSelf: 'center', color: 'white',
        backgroundColor: 'black',
        fontSize: 20,
        padding: 5, shadowRadius: 1,
        shadowOpacity: 10
    },
    fll_txtBirthday: {
        fontWeight: '300'
    },
    fll_txtFmbd: { fontWeight: '800' },
    fll_btn_container: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
    fll_btnUpdate: { backgroundColor: 'green', padding: 10 },
    fll_btnDelete: { backgroundColor: 'red', padding: 10 },
    fll_txtUpdate: { color: 'white', fontWeight: 'bold' },
    fll_txtDelete: { color: 'white', fontWeight: '500' },
});

export default Lab8List;
