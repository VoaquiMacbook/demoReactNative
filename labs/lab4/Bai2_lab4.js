import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, StatusBarStyle, RefreshControl } from 'react-native';

const Bai2_lab4 = () => {
  const [barStyle, setBarStyle] = useState<StatusBarStyle>('light-content');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const onScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 50) {
      setBarStyle('dark-content');
    } else {
      setBarStyle('light-content');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.scrollView}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        <StatusBar
          barStyle={barStyle}
          translucent
          backgroundColor={'transparent'}
        />
        <Text style={styles.text}>Kéo để đổi màu và làm mới</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Bai2_lab4;
