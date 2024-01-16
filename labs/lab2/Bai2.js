import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Bai2 = () => {
    const oldData = [
        { code: 'ab', name: 'Son môi' },
        { code: 'ac', name: 'Sữa rữa mặt' },
        { code: null, name: null},
        { code: null, name:''},

    ];

    const parseArrayToObject = ({ oldData = [], keyId = '' }) =>
        Object.fromEntries(
            oldData?.map(item => [keyId? item?.[keyId] : item, item]) || []
        );
        
    const filterObject = obj => {
        Object.keys(obj).forEach(key => { });
        return obj;
    };

    const convertedData = parseArrayToObject({ oldData, keyId: "code" });
    const filteredData = filterObject(convertedData);
    console.log('>>>>>');
    console.log(filteredData );


    return (
        <View>
            <Text>Bai2</Text>
            <Text style={Ds.welcome}>{JSON.stringify(filteredData)}</Text>
        </View>
    )
}

export default Bai2
const Ds = StyleSheet.create({
    welcome: {
        fontSize: 15,
        fontWeight: 'italic',
        textAlign: 'center',
    }
})