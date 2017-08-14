import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: Message[] = [ ];
  term = '';
  constructor(private messagesService: MessagesService){ }

  ngOnInit() {
     this.messages = this.messagesService.getMessages()
  }

  onMessageSent(messageData: {sender: string, content: string}) {
      this.messages.push(new Message(messageData.content, messageData.sender, new Date()))
  }


}
