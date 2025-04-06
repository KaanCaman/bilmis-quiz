import {View} from 'react-native';
import React from 'react';

import QuestionCard from './src/components/question/QuestionCard';
import {questions} from './src/data/mock/dummyData';

const App = () => {
  const q = questions[0];
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <QuestionCard question={q} />
    </View>
  );
};

export default App;
