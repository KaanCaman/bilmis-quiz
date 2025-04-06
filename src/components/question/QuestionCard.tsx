import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Question} from '../../types/question/Question';
import QuestionButton from './QuestionButton';
import {spacing} from '../../theme/spacing';

import {radii} from '../../theme/radii';
import colorScheme from '../../theme/colorsScheme';
import {fontSizes} from '../../theme/fontSizes';
import {Option} from '../../types/question/Option';

type QuestionCardType = {
  question: Question;
  onClick?: (option: Option) => void;
};

const QuestionCard = ({question, onClick}: QuestionCardType) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <QuestionButton
          key={index}
          onPress={() => {
            if (onClick) {
              onClick(option.key);
            }
          }}
          title={option.value}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colorScheme.light.background,
    borderRadius: radii.md,
    padding: spacing.md,
    shadowColor: colorScheme.light.cardShadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    elevation: 3,
  },
  question: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    marginVertical: spacing.sm,
  },
});

export default QuestionCard;
