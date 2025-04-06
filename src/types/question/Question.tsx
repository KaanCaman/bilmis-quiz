import {Option} from './Option';
import {QuestionOption} from './QuestionOption';

export interface Question {
  id: number;
  question: string;
  options: Array<QuestionOption<Option, string>>;
  correctAnswer: Option;
}
