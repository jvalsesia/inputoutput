import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  childTitle = input<string>();
  childNumber = input<number>();
  numberToParent = output<number>();

  stringToParent = output<string>();



  sendNumberToParent() {
    // Emitting a sample number to the parent component
    // random number for demonstration
    const randomNumber = Math.floor(Math.random() * 100);
    this.numberToParent.emit(randomNumber);
  }

  sendStringToParent() {
    // Emitting a sample string to the parent component
    // random number for demonstration
    const randomNumber = Math.floor(Math.random() * 100);
    const sampleString = 'child ' + this.childNumber() + " sent " + randomNumber;
    this.stringToParent.emit(sampleString);
  }

}
