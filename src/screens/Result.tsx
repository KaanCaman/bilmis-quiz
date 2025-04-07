// src/screens/ResultScreen.js
import React, {useEffect} from 'react';
import {Text, StyleSheet, BackHandler, Alert} from 'react-native';
import CustomButton from '../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {uiText} from '../utils/UiText';
import {fontSizes} from '../theme/fontSizes';
import {spacing} from '../theme/spacing';
import colorScheme from '../theme/colorsScheme';
import AlternativeButton from '../components/AlternativeButton';

const ResultScreen = ({route}) => {
  const navigation = useNavigation();

  const {score = 70, totalQuestions = 10} = route.params || {};

  const correctCount = Math.floor(score / totalQuestions); // Örnek: 70 puan → 7 doğru
  const emoji = score >= 90 ? '🎉' : score >= 70 ? '👍' : '😢';

  useEffect(() => {
    const onBackPress = () => {
      Alert.alert(uiText.warning, uiText.noBackAlert);
      // Geri butonuna basıldığında hiçbir işlem yapmayarak geri gitmeyi engelle.
      return true;
    };

    // Abonelik oluşturulur
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    // Cleanup: Abonelik kaldırılır
    return () => subscription.remove();
  }, []);

  const handleRetry = () => {
    navigation.navigate('Quiz');
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.score}>Skor: {score}</Text>
      <Text style={styles.detail}>
        {correctCount}/{totalQuestions} Doğru
      </Text>

      <AlternativeButton
        title={uiText.tryAgain}
        onPress={handleRetry}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <AlternativeButton
        title={uiText.homePage}
        onPress={handleGoHome}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colorScheme.light.background,
  },
  emoji: {
    fontSize: fontSizes.xxl,
    marginBottom: spacing.md,
  },
  score: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },
  detail: {
    fontSize: fontSizes.md,
    color: colorScheme.light.textSecondary,
    marginBottom: spacing.xl,
  },
  button: {
    marginVertical: spacing.sm,
    width: '80%',
  },
  buttonText: {
    fontSize: fontSizes.lg,
  },
});

export default ResultScreen;
