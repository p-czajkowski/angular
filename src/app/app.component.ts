import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Jakis tytuł';
  selectedMessage: Message;

  messages: Message[] = [
    {
      id: 1,
      content: 'Wiadomość'
    },
    {
      id: 2,
      content: 'Wiadomość w tablicy 1',
      author: 'Ja'
    },
    {
      id: 3,
      content: 'Wiadomość w tablicy 2'
    }
  ];

  private showMessage(message: Message): void {
    this.selectedMessage = message;
  }

}

export interface Message {
  id: number;
  content: string;
  author?: string;
}
