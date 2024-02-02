import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';


const Lab8List = (props) => {
    const { navigation } = props
    const [isAnimating, setAnimating] = useState(false);
    const [opacityValue, setOpacityValue] = useState(new Animated.Value(0));

    const handleButtonClick = () => {
        if (!isAnimating) {
            setAnimating(true);
            Animated.timing(opacityValue, {
                toValue: 5,
                duration: 5000,
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


    }
    return (
        <View>
            <TouchableOpacity style={styles.order} onPress={nextL8detail}>
                <Image style={{ width: 80, height: 40, borderRadius: 50, shadowOpacity: 10, shadowRadius: 10 }} source={require('../../assets/images/git_right.png')} />
                <Animated.Text style={[styles.span, { opacity: opacityValue }]}>
                    <Image style={styles.image} source={require('../../assets/images/git_next.png')} />
                </Animated.Text>
            </TouchableOpacity>
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
        marginStart: 20,
        marginTop: 20,

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



});

export default Lab8List;
