import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidateSentence } from './validators/sentence.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm!: FormGroup;
  comments: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      comment: ['', [ValidateSentence]],
    });
  }

  addComments() {
    this.comments.push(this.myForm.controls['comment'].value);
    this.myForm.reset();
  }
}
