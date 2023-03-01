import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { SelectBoxQuestion } from './question-selectbox';
import { TextboxQuestion } from './question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiAddress: string = environment.apiUrl;
  constructor(public httpClient: HttpClient) { }

   get<T>(url: string,options?: Object): Observable<T> {
    const fullUrl: string = this.apiAddress + url;
    return this.httpClient.get<T>(fullUrl,options).pipe(map((m:any) => m.sort((a:any, b:any) => a.order - b.order)));

  }
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new SelectBoxQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),
      new DropdownQuestion({
        key: 'country',
        label: 'Country Select',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

}
