import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'devextreme-dynamic-form';
  //questions$: Observable< QuestionBase<any>[]>
  isDataAvailable: boolean = false;
  questions$:  QuestionBase<any>[] =[];
  constructor(private _service: QuestionService){

    _service.getQuestions().subscribe(response=>{
      console.log(response);
    //  this.questions$ = response;
    });
    //this.questions$ = this._service.get<QuestionBase<string>[]>('GetQuestions')


  }
  async ngOnInit(): Promise<void> {
   // this.questions$ = this._service.get<QuestionBase<string>[]>('GetQuestions')

   this._service.get<QuestionBase<string>[]>('GetQuestions')
    .subscribe(response=>{
      console.log(response);
      this.questions$ = response;
      this.isDataAvailable = true;
    })
  }
  helloWorld() {
    alert('Hello world!');
}
}
