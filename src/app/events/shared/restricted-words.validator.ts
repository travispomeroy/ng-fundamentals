import {FormControl} from "@angular/forms";

export function restrictedWords(restricedWords: string[]) {
  return (control: FormControl): { [key: string]: any } => {
    if (!restricedWords) {
      return null;
    }

    let invalidWords = restricedWords.map(value => control.value.includes(value) ? value : null)
      .filter(value => value != null);

    return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null;
  }
}
