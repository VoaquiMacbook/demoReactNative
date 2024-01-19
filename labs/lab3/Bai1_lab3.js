import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Bai1_lab3 = () => {
    const colorText = (color) => {
        return { color };
    };
    const sizeText = (fontSize) => {
        return { fontSize };
    };
    const styleText = (styles) => {
        return styles;
    };


    return (
        <View>
            
            <View style={styles.container}>
                <Text style={styles.baseText}>Em vào đời bằng{' '}
                    <Text style={[styles.boldText, colorText('red')]}>vang đỏ {''}</Text>
                    anh vào đời bằng{' '}
                    <Text style={[styles.italicText, colorText('yellow')]}> nước trà</Text>
                </Text>
                <Text style={[styles.baseText]}>Bằng cơn mưa thơm{' '}
                    <Text style={[styles.boldText, colorText('white'), sizeText(18)]}>mùi đất {''}</Text>
                    <Text style={{ fontSize: 15 }}>và </Text>
                    <Text style={{ fontSize: 10 }}>bằng hoa dại mọc trước nhà</Text>
                </Text>
                <Text style={[styles.baseText, colorText('gray')]}>Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ</Text>
                <Text style={styles.baseText}>
                    Lý trí em là{' '}
                    <Text style={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}> công cụ {''}</Text>
                </Text>
                <Text style={styles.baseText}>
                    còn trái tim anh là{' '}
                    <Text style={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}> động cơ {''}</Text>
                </Text>
                <Text style={[styles.baseText,
                colorText('white'),
                styleText({ textAlign: 'right' })]}>
                    Em vào đời bằng đồng nghiệp anh vào đời nhiều thân tình
                </Text>
                <Text style={[styles.baseText,
                colorText('orange'),
                styleText({ textAlign: 'center', fontWeight: 'bold' })]}>
                    Anh chỉ muốn chân mình dập đất không muốn đạp ai dưới chân mình
                </Text>
                <Text style={[styles.baseText,
                colorText('black'),
                styleText({ fontWeight: 'bold' })]}>Em vào đời bằng{' '}
                    <Text style={[styles.boldText, colorText('white')]}>mây trắng {''}</Text>
                    em vào đời bằng{' '}
                    <Text style={[styles.italicText, colorText('yellow')]}> nắng xanh</Text>
                </Text>
                <Text style={[styles.baseText,
                colorText('black'),
                styleText({ fontWeight: 'bold' })]}>Em vào đời bằng{' '}
                    <Text style={[styles.boldText, colorText('yellow')]}>đại lộ {''}</Text>
                    và con đường đó giờ{' '}
                    <Text style={[styles.italicText, colorText('white')]}> vắng anh</Text>
                </Text>
            </View>
        </View>

    )
}

export default Bai1_lab3
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
    },
    baseText: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontWeight: 'bold',
    },



})