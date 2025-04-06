import {View, Text} from 'react-native';
import React from 'react';
import AlternativeButton from './src/components/AlternativeButton';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AlternativeButton title="this is alternative" />
      <AlternativeButton title="this is alternative" disabled />
    </View>
  );
};

export default App;
