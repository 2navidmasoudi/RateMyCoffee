import React from 'react';
import {StyleSheet, View} from 'react-native';
import Rate from '../components/Rate';

function RateScreen() {
  return (
    <View style={styles.container}>
      <Rate />
      {/* <Text></Text> */}
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

export default RateScreen;
