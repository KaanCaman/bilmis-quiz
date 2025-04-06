import {View, Text} from 'react-native';
import React from 'react';
import QuestionButton from './src/components/question/QuestionButton';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <QuestionButton title="this is question" />
      <QuestionButton title="this is question" isCorrect />
      <QuestionButton title="this is question" isCorrect={false} />
      <QuestionButton title="this is question" disabled />
    </View>
  );
};

export default App;
