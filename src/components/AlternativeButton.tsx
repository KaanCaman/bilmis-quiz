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

type AlternativeButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const AlternativeButton = ({
  title,
  onPress,
  textStyle,
  style,
  disabled = false,
}: AlternativeButtonProps) => {
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
    backgroundColor: colorScheme.light.background,
    padding: spacing.md,
    borderColor: colorScheme.light.primary,
    borderWidth: 2,
    borderRadius: radii.md,
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  disabled: {
    borderColor: colorScheme.light.buttonDisabledColor,
  },
  text: {
    color: colorScheme.light.textPrimary,
    fontWeight: 'bold',
  },
});

export default AlternativeButton;
