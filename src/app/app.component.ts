import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 0;
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClick() {
    this.password = 'My Password';
  }

  onLengthChange(val: Event) {
    const newLength = (val.target as HTMLInputElement).value;
    if (newLength.length > 0 && !isNaN(+newLength)) {
      this.passwordLength = +newLength;
    }

    console.log(`assigning length`, this.passwordLength)
  }

  useLettersChangeHandler() {
    this.useLetters = !this.useLetters;
  }

  useNumbersChangeHandler() {
    this.useNumbers = !this.useNumbers;
  }

  useSymbolsChangeHandler() {
    this.useSymbols = !this.useSymbols;
  }

  onGeneratePassword() {
    console.log(`passwordLength`, this.passwordLength)
    let characters = '';
    let randomPassword = '';
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*';

    if (this.useLetters) {
      characters += letters;
    }

    if (this.useNumbers) {
      characters += numbers;
    }

    if (this.useSymbols) {
      characters += symbols;
    }

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * characters.length);

      randomPassword += characters[index];
    }

    this.password = randomPassword;
  }
}
