import {Option} from './Option';

export interface QuestionOption<K extends Option, V> {
  key: K;
  value: V;
}
