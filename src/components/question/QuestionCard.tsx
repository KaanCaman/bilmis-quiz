import React from 'react';
import {View, Text, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {Question} from '../../types/question/Question';
import QuestionButton from './QuestionButton';
import {spacing} from '../../theme/spacing';

import {radii} from '../../theme/radii';
import colorScheme from '../../theme/colorsScheme';
import {fontSizes} from '../../theme/fontSizes';
import {Option} from '../../types/question/Option';

type QuestionCardType = {
  question: Question;
  onClick?: (userOption: Option, correctOption: Option) => void;
  style: StyleProp<ViewStyle>;
  optionIsCorrect?: boolean;
  buttonDisabled?: boolean;
  userSelectOption?: Option;
};

const QuestionCard = ({
  question,
  onClick,
  style,
  userSelectOption,
  optionIsCorrect,
  buttonDisabled = false,
}: QuestionCardType) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => {
        // showAnswer değişkeni, cevabın kontrol edilip edilmediğini belirler.
        // "optionIsCorrect !== undefined" ifadesi, cevabın kontrol edildiğini gösterir.
        const showAnswer = optionIsCorrect !== undefined; // Cevap kontrol edildiyse
        return (
          <QuestionButton
            key={index}
            isSelected={userSelectOption === option.key}
            disabled={buttonDisabled}
            //
            //  If the answer has been checked and this option matches the correct answer, it will be highlighted in green.
            //  Eğer cevap kontrol edildiyse ve bu seçenek, sorunun doğru cevabına eşitse, bu seçenek yeşil renkle işaretlenir.
            isCorrect={showAnswer && option.key === question.correctAnswer}
            //
            //  If the answer has been checked and the user's selected option is not the correct answer, it will be highlighted in red.
            //  Eğer cevap kontrol edildiyse ve kullanıcının seçtiği seçenek doğru cevap değilse, bu seçenek kırmızı renkle işaretlenir.
            isWrong={
              showAnswer &&
              userSelectOption === option.key &&
              option.key !== question.correctAnswer
            }
            onPress={() => {
              if (onClick) {
                // Seçeneğe tıklandığında onClick fonksiyonunu çağırıyoruz.
                onClick(option.key, question.correctAnswer);
              }
            }}
            title={option.value}
          />
        );
      })}
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
