// src/components/CustomButton.js
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {spacing} from '../theme/spacing';
import {radii} from '../theme/radii';
import colorScheme from '../theme/colorsScheme';

type CustomButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const CustomButton = ({
  title,
  onPress,
  textStyle,
  style,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorScheme.light.primary,
    padding: spacing.md,
    borderRadius: radii.md,
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  disabled: {
    backgroundColor: colorScheme.light.buttonDisabledColor,
  },
  text: {
    color: colorScheme.light.textButtom,
    fontWeight: 'bold',
  },
});

export default CustomButton;
