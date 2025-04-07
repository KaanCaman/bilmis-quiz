import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colorScheme from '../../theme/colorsScheme';
import {spacing} from '../../theme/spacing';
import {radii} from '../../theme/radii';

type QuestionButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  isSelected?: boolean;
  isCorrect?: boolean | undefined;
  isWrong?: boolean | undefined;
};

const QuestionButton = ({
  title,
  onPress,
  disabled,
  textStyle,
  style,
  isSelected = false,
  isCorrect,
  isWrong,
}: QuestionButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        isSelected && styles.selected,
        isCorrect && styles.correct,
        isWrong && styles.wrong,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default QuestionButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorScheme.light.background,
    padding: spacing.md,
    borderColor: colorScheme.light.buttonDisabledColor,
    borderWidth: 2,
    borderRadius: radii.md,
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  disabled: {
    backgroundColor: colorScheme.light.questionButtonBorderColor,
    borderColor: 'transparent',
  },
  text: {
    color: colorScheme.light.textPrimary,
    fontWeight: '500',
  },
  correct: {
    backgroundColor: colorScheme.light.correct,
    borderColor: 'transparent',
  },
  wrong: {
    backgroundColor: colorScheme.light.wrong,
    borderColor: 'transparent',
  },
  selected: {
    backgroundColor: colorScheme.light.questionButtonBorderColor,
    borderColor: colorScheme.light.buttonDisabledColor,
  },
});
