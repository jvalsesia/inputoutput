import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Testing input and output');

  protected readonly receivedNumber = signal<number | null>(null);

  protected readonly receivedString = signal<string | null>(null);

  children = [1, 2, 3, 4, 5]

  onReceiveNumberFromChild(num: number) {
    this.receivedNumber.set(num);
  }

  onReceiveStringFromChild(str: string) {
    this.receivedString.set(str);
  }
}
