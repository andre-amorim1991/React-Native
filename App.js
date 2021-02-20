import React from 'react';
import { StatusBar,  View } from 'react-native';

import Routes from './src/Routes';

function App() {
  return (
    <View>
      <StatusBar hidden />

      <Routes />
    </View>
  )
}

export default App;