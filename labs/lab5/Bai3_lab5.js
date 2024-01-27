import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Bai3_lab5 = () => {
  return (
    <View style={styles.container}>
    {/* Phần Header */}
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://jpboxinggym.com/wp-content/uploads/2023/06/solo-female-traveller-bridge-1366x2048.jpg' }}
        style={styles.headerImage}
      />
      <TouchableOpacity style={styles.likeIcon}>
        {/* Icon trái tim hoặc hình ảnh khác */}
      
      </TouchableOpacity>
    </View>

    {/* Phần Body */}
    <View style={styles.body}>
      {/* Nội dung chi tiết chuyến đi */}
      <Text numberOfLines={6} ellipsizeMode="tail" style={styles.tripInfo}>
        {/* Nội dung chi tiết chuyến đi sẽ được đặt ở đây */}
      </Text>
    </View>

    {/* Phần Footer */}
    <View style={styles.footer}>
      {/* Giá tiền và nút đặt */}
      <Text style={styles.price}>$100</Text>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Đặt ngay</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 7,
    position: 'relative',
  },
  headerImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  likeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    // Icon styles
  },
  body: {
    flex: 3,
    padding: 20,
  },
  tripInfo: {
    // Styles for trip information
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', // Màu nền của Footer
    paddingHorizontal: 20,
  },
  price: {
    // Styles for price text
  },
  bookButton: {
    // Styles for book button
  },
  bookButtonText: {
    // Styles for book button text
  },
});

export default Bai3_lab5;
