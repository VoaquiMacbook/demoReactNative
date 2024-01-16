import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Bai1 = () => {
    const class1 = [
        {
            mssv: 'PS0000',
            name: 'Nguyen Van A',
            avgPoint: 8.9,
            avgTraningPoint: 7,
            status: 'pass',
        },
        {
            mssv: 'PS0001',
            name: 'Nguyen Van B',
            avgPoint: 4.9,
            avgTraningPoint: 10,
            status: 'pass',
        }
    ];

    const class2 = [
        {
            mssv: 'PS0002',
            name: 'Nguyen Van C',
            avgPoint: 4.9,
            avgTraningPoint: 10,
            status: 'failed',
        },
        {
            mssv: 'PS0003',
            name: 'Nguyen Van D',
            avgPoint: 10,
            avgTraningPoint: 10,
            status: 'pass',
        },
        {
            mssv: 'PS0004',
            name: 'Nguyen Van E',
            avgPoint: 10,
            avgTraningPoint: 2,
            status: 'pass',
        },
    ]
    const allStudent = class1.concat(class2)
        .filter(student => student?.status !== 'failed')
        .sort((a, b) => b.avgPoint - a.avgPoint);
        const allStudent1 = class1.concat(class2)
        .filter(student => student?.status !== 'failed')
        .sort((b, a) => b.avgPoint - a.avgPoint);
    console.log(allStudent);


    //  const [name,avgPoint] = class1;
    //  console.log(name, avgPoint);


    return (
        <View>
            <Text>Bai 1</Text>
            <Text style={myDemo2Style.welcome}>Danh sách sinh viên có điểm số từ cao xuống thấp</Text>
            {
                allStudent.map((student, index) => {
                    return (
                        <Text style={Ds.welcome} key={index}>{student.name}{"   "}{student.avgPoint}</Text>
                    )
                })
            }
             <Text style={myDemo1Style.welcome}>Danh sách sinh viên có điểm rèn luyện từ cao xuống thấp.</Text>
             {
                allStudent1.map((student, index) => {
                    return (
                        <Text style={Ds.welcome} key={index}>{student.name}{"   "}{student.avgPoint} </Text>
                    )
                })
            }
        </View>
    )
}

export default Bai1
const myDemo1Style = StyleSheet.create({
    welcome: {
      fontSize: 15,
      color: 'green',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })
  const myDemo2Style = StyleSheet.create({
    welcome: {
      fontSize: 15,
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })
  const Ds = StyleSheet.create({
    welcome: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })