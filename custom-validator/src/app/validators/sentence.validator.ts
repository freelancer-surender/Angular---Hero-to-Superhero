import { AbstractControl } from "@angular/forms";

export function ValidateSentence(control: AbstractControl) {
  const abusiveWords = ['fool', 'idiot', 'damn', 'bloody'];
  const sentence = control.value;
  const wordsArr = sentence.split(" ");
  let isClean = true;
  for (let word of wordsArr) {
    if (abusiveWords.includes(word)) {
      isClean = false;
    }
  }
  if (isClean) {
    return null;
  } else {
    return {isAbusive: true}
  }
}
