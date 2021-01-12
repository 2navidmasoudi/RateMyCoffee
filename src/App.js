/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import {Colors} from 'react-native/Libraries/NewAppScreen';

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigator from './navigator';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Navigator />
    </SafeAreaView>
  </>
);

export default App;
