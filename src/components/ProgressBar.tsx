import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {spacing} from '../theme/spacing';
import colorScheme from '../theme/colorsScheme';

type ProgressBarProps = {
  progress: number;
  style?: StyleProp<ViewStyle>;
};

const ProgressBar = ({progress, style}: ProgressBarProps) => {
  // Create an Animated.Value using useRef to persist the value across renders
  // This prevents re-creating the animation value on every render.
  //
  // useRef sayesinde, her render'da aynı referansı kullanarak Animated.Value oluşturuyoruz.
  // Bu, her render'da animasyon değerinin yeniden oluşturulmasını engeller.
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the progress bar when the "progress" prop changes.
    // "progress" prop'u değiştiğinde, ilerleme çubuğunu animasyonla güncelliyoruz.
    Animated.timing(animation, {
      // Target value for the animation (0-100)
      // Animasyon için hedef değer (0-100)
      toValue: progress,

      // Duration of the animation in milliseconds
      // Animasyon süresi (milisaniye cinsinden)
      duration: 300,

      // useNativeDriver is set to false because animations on layout properties like "width"
      // cannot be run on the native driver.
      //
      // useNativeDriver, genişlik gibi layout (düzen) özelliklerinin animasyonlanması
      // native driver üzerinde desteklenmediği için false olarak ayarlandı.
      useNativeDriver: false,
    }).start();
  }, [progress, animation]);

  // Interpolate the animated value to convert it from a numeric value (0-100)
  // to a percentage string for the width property (from '0%' to '100%')
  //
  // Animasyon değerini, sayısal (0-100) bir değerden genişlik için
  // yüzde ifadesine ('0%' - '100%') çevirmek için interpolate kullanıyoruz.
  const widthInterpolated = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    // Container view for the progress bar
    // İlerleme çubuğu için konteyner view
    <View style={[styles.container, style]}>
      <Animated.View style={[styles.progressBar, {width: widthInterpolated}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 10,
    backgroundColor: colorScheme.light.questionButtonBorderColor,
    borderRadius: spacing.sm,
    overflow: 'hidden', // bar dışına taşan kısımları gizler
  },
  progressBar: {
    height: '100%',
    backgroundColor: colorScheme.light.primary, // ilerleme çubuğunun rengi
  },
});

export default ProgressBar;
