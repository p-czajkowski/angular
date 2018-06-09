import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../app.component';


@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent {

  @Input()
  private message: Message;

}
