import { Option } from '../../types/question/Option';
import { Question } from '../../types/question/Question';

export const questions: Question[] = [
  {
    id: 1,
    question: "Türkiye'nin başkenti neresidir?",
    options: [
      { key: Option.a, value: 'İstanbul' },
      { key: Option.b, value: 'Ankara' },
      { key: Option.c, value: 'İzmir' },
      { key: Option.d, value: 'Bursa' },
    ],
    correctAnswer: Option.b,
  },
  {
    id: 2,
    question: 'Dünyanın en büyük okyanusu hangisidir?',
    options: [
      { key: Option.a, value: 'Atlantik Okyanusu' },
      { key: Option.b, value: 'Hint Okyanusu' },
      { key: Option.c, value: 'Arktik Okyanusu' },
      { key: Option.d, value: 'Pasifik Okyanusu' },
    ],
    correctAnswer: Option.d,
  },
  {
    id: 3,
    question: 'Bir gün kaç saattir?',
    options: [
      { key: Option.a, value: '10' },
      { key: Option.b, value: '12' },
      { key: Option.c, value: '24' },
      { key: Option.d, value: '48' },
    ],
    correctAnswer: Option.c,
  },
  {
    id: 4,
    question: 'Python programlama dili ne zaman oluşturulmuştur?',
    options: [
      { key: Option.a, value: '1989' },
      { key: Option.b, value: '1995' },
      { key: Option.c, value: '2000' },
      { key: Option.d, value: '2010' },
    ],
    correctAnswer: Option.a,
  },
  {
    id: 5,
    question: 'HTML neyin kısaltmasıdır?',
    options: [
      { key: Option.a, value: 'HyperText Markup Language' },
      { key: Option.b, value: 'HighText Machine Language' },
      { key: Option.c, value: 'HyperTool Multi Language' },
      { key: Option.d, value: 'HyperTag Markup Language' },
    ],
    correctAnswer: Option.a,
  },
  {
    id: 6,
    question: 'React hangi dili temel alır?',
    options: [
      { key: Option.a, value: 'Python' },
      { key: Option.b, value: 'Java' },
      { key: Option.c, value: 'JavaScript' },
      { key: Option.d, value: 'C#' },
    ],
    correctAnswer: Option.c,
  },
  {
    id: 7,
    question: "Türkiye'nin en uzun nehri hangisidir?",
    options: [
      { key: Option.a, value: 'Kızılırmak' },
      { key: Option.b, value: 'Fırat' },
      { key: Option.c, value: 'Dicle' },
      { key: Option.d, value: 'Yeşilırmak' },
    ],
    correctAnswer: Option.a,
  },
  {
    id: 8,
    question: "Hangi gezegen Güneş Sistemi'nde en büyüğüdür?",
    options: [
      { key: Option.a, value: 'Venüs' },
      { key: Option.b, value: 'Mars' },
      { key: Option.c, value: 'Satürn' },
      { key: Option.d, value: 'Jüpiter' },
    ],
    correctAnswer: Option.d,
  },
  {
    id: 9,
    question: 'CSS hangi amaçla kullanılır?',
    options: [
      { key: Option.a, value: 'Veritabanı bağlantısı kurmak' },
      { key: Option.b, value: 'Sayfa içeriğini şekillendirmek' },
      { key: Option.c, value: 'Sunucu kurmak' },
      { key: Option.d, value: 'Mobil uygulama geliştirmek' },
    ],
    correctAnswer: Option.b,
  },
  {
    id: 10,
    question: "Türkiye'nin en kalabalık şehri hangisidir?",
    options: [
      { key: Option.a, value: 'İzmir' },
      { key: Option.b, value: 'Ankara' },
      { key: Option.c, value: 'İstanbul' },
      { key: Option.d, value: 'Bursa' },
    ],
    correctAnswer: Option.c,
  },
];
