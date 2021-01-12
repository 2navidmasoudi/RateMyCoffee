import React from 'react';
import {StyleSheet, View} from 'react-native';
import Rate from '../components/Rate';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Rate navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
