// QuizScreen.tsx

import {
  ActivityIndicator,
  Alert,
  BackHandler,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {spacing} from '../theme/spacing';
import colorScheme from '../theme/colorsScheme';
import {fontSizes} from '../theme/fontSizes';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/question/QuestionCard';
import {questions} from '../data/mock/dummyData';
import CustomButton from '../components/CustomButton';
import {uiText} from '../utils/UiText';
import {Option} from '../types/question/Option';
import {useNavigation} from '@react-navigation/native';

const scorePoint = 100 / questions.length;

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const [answer, setAnswer] = useState<Option | undefined>(undefined);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const navigation = useNavigation();

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

  // handle submit answer
  const handleSubmitAnswer = () => {
    if (answer === undefined) {
      Alert.alert(uiText.warning, uiText.selectOptionAlert); // Eğer cevap seçilmemişse uyarı göster.
      return;
    }
    setIsSubmit(true);
    setTimeout(() => {
      const result = answer === questions[questionIndex].correctAnswer;
      setIsCorrect(result);
      if (result) {
        setScore(prev => prev + 1);
      }
      setIsSubmit(false);
    }, 500);
  };

  // handle next question press
  function handleNextQuestionPress() {
    if (answer === undefined) {
      // Cevap seçilmemişse ilerlemeyi engelle
      Alert.alert('Lütfen önce bir seçenek seçin');
      return;
    }
    // Sonuç gösterildiyse sonraki soruya geç
    setIsCorrect(undefined);
    setAnswer(undefined);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  }
  function handleFinish() {
    // go result page
    navigation.navigate('Result', {
      score: score * scorePoint,
      totalQuestions: questions.length,
    });
  }

  // Butonun davranışını kontrol eden fonksiyon
  const handleButtonPress = () => {
    // Eğer cevabı kontrol etmediysek, önce checkAnswer fonksiyonunu çalıştır
    if (isCorrect === undefined) {
      return handleSubmitAnswer();
    } else if (questionIndex === questions.length - 1) {
      // eğer son soru ise result page git
      return handleFinish();
    } else {
      // Cevap kontrol edildiyse, sonraki soruya geç
      return handleNextQuestionPress();
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.questionNumberText}>{`${questionIndex + 1} / ${
        questions.length
      }`}</Text>
      <ProgressBar
        progress={(questionIndex + 1) * 10}
        style={styles.progressBar}
      />
      <QuestionCard
        question={questions[questionIndex]}
        style={styles.questionCard}
        optionIsCorrect={isCorrect}
        userSelectOption={answer}
        onClick={setAnswer} // veya handleOptionClick: (option) => setAnswer(option);
      />
      {isSubmit ? (
        <ActivityIndicator size="large" color={colorScheme.light.primary} />
      ) : (
        <CustomButton
          disabled={isSubmit}
          title={
            isCorrect === undefined
              ? uiText.checkAnswer // Cevap kontrol edilmemişse "Check Answer" butonu
              : questionIndex === questions.length - 1
              ? uiText.finsihQuiz // Son soru ise "Finish Quiz"
              : uiText.nextQuestion // Aksi halde "Next Question"
          }
          style={styles.nextQuestionButton}
          onPress={handleButtonPress}
        />
      )}
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    gap: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorScheme.light.background,
  },
  questionNumberText: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
  },
  progressBar: {
    width: '85%',
  },
  questionCard: {
    marginVertical: spacing.lg,
    width: '96%',
  },
  nextQuestionButton: {
    width: '85%',
  },
});
