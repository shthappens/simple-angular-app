import { Component } from '@angular/core';
import { SendService  } from './send.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'simple-angular-app';
  fname = '';
  lname = '';

  constructor(private sendService: SendService) {}

  clearForm() {
    this.fname = '';
    this.lname = '';
  }

  sendForm() {
    const fullName = `${this.fname} ${this.lname}`.trim();
    // const message = `Hello from ${fullName}!`;
    const message = `${this.fname} ${this.lname}`.trim();

    if (!message) {
      alert('Please enter your full name before sending.');
      return;
    }
    
    this.sendService.postMessage(message)
    .subscribe({
      next: (response: any) => {
        console.log('Success:', response);
        alert('Message sent successfully!\n' + JSON.stringify(response, null, 2));
        // alert('Message sent successfully!');
      },
      error: (error: any) => {
        console.log('Error:', error);
        alert('Something went wrong.');
      }
    });
  }
}
  

