import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Demo4_2 from './Demo4_2';
import Demo4_3 from './Demo4_3';
import Demo4_4 from './Demo4_4';

const Demo4_1 = () => {
    // số thứ 1, số thứ 2, kết quả
    const [so1, setSo1] = useState(4);
    const [so2, setSo2] = useState(5);
    const [so3, setSo3] = useState(0);
    const [result, setResult] = useState(6);
    const [message, setMessage] = useState("")
    

    const onPress = () => {
        const newSo1 = Math.floor(Math.random() * 10); // Số ngẫu nhiên từ 0 đến 9
        const newSo2 = Math.floor(Math.random() * 10);
        const newResult = Math.floor(Math.random() * 10);
        if(newResult % 2 == 0){
            //dung
            setResult(newSo1 + newSo2);
        }else{
            //sai
            setResult(newSo1 + newSo2 * 2 + 1);
        }

        // Cập nhật giá trị mới vào state
        setSo1(newSo1);
        setSo2(newSo2);
        setResult(newResult);
        // tạo ngẫu nhiên 1 phép toán mới
    }

    return (
        <View>
            <Text
                style={{ fontSize: 40 }}
            >{so1} + {so2}</Text>
            <Text
                style={{ fontSize: 40 }}
            >=</Text>
            <Text
                style={{ fontSize: 40 }}
            >{result}</Text>
            <Button
                title="Đúng"
                onPress={onPress}
            />
            <Button

                title="Sai"
                onPress={onPress}
            />
          <Demo4_2 message={message}/>
          <Demo4_4 so1={so1} so2={so2} result={result} />
          <Demo4_3 onPress={onPress}/>
         






        </View>
    )
}

export default Demo4_1
// dữ liệu trong component
// 1. state: dữ liệu thay đổi trong componen