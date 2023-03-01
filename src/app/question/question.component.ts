import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    console.log(this.question)
    return this.form.controls[this.question.key].valid;}
}
