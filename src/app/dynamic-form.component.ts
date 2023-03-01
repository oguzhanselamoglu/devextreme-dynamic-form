import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit,AfterViewInit {

  @Input() questions: QuestionBase<string>[]  = [];
  form!: FormGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlService) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    console.log(this.questions);
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);

  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
