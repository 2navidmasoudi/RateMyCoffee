import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function SalarScreen() {
  return (
    <View style={styles.container}>
      <Text>به صفحه مخصوص آقا سالار خوش آمدید!</Text>
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

export default SalarScreen;
