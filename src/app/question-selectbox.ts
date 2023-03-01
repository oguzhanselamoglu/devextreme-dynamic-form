import { QuestionBase } from "./question-base";

export class SelectBoxQuestion extends QuestionBase<string> {
  override controlType = 'selectbox';
}
