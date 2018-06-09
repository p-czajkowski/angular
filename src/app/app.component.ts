import {Component, OnInit} from '@angular/core';
import {MessageService} from './services/message-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Jakis tytuł';
  selectedMessage: Message;

  messages: Message[];

  constructor(private messageServiece: MessageService) {
  }
  ngOnInit(): void {
    this.messages = this.messageServiece.getMessages();
  }
  private showMessage(message: Message): void {
    this.selectedMessage = message;
  }
}

export interface Message {
  id: number;
  content: string;
  author?: string;
}
