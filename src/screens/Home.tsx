// Home screen
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {uiText} from '../utils/UiText';
import {fontSizes} from '../theme/fontSizes';
import colorScheme from '../theme/colorsScheme';
import {spacing} from '../theme/spacing';
import CustomButton from '../components/CustomButton';
import BilmisMascotSvg from '../../assets/logo/BilmisMascot';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  // navigate screens
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.logo}>
        <BilmisMascotSvg />
      </View>
      <Text style={styles.appName}>{uiText.appName}</Text>
      <Text style={styles.slogan}>{uiText.slogan}</Text>
      <CustomButton
        title={uiText.startQuiz}
        style={styles.startQuizButton}
        textStyle={styles.startQuizText}
        onPress={() => {
          navigation.navigate('Quiz');
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    gap: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorScheme.light.background,
  },
  logo: {
    margin: spacing.sm,
    paddingVertical: spacing.sm,
  },
  appName: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colorScheme.light.textPrimary,
  },
  slogan: {
    alignSelf: 'center',
    color: colorScheme.light.textSecondary,
    fontWeight: '600',
  },
  startQuizButton: {
    width: '80%',
  },
  startQuizText: {
    fontSize: fontSizes.lg,
  },
});
