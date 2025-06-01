import { Component } from '@angular/core';
import { SendService  } from './send.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'simple-angular-app';
  fullname = '';

  constructor(private sendService: SendService) {}

  clearForm() {
    this.fullname = '';
  }

  sendForm() {
    const message = `${this.fullname}`.trim();

    if (!message) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please enter your full name before sending.',
      });
        return;
      }
    
    this.sendService.postMessage(message).subscribe({
      next: (response: any) => {
        Swal.fire({
          title: 'Message sent!',
          html: `<pre>${JSON.stringify(response, null, 2)}</pre>`,
          icon: 'success',
          confirmButtonText: 'Close'
        });
      },
      error: (error: any) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'Close'
        });
      }
    });
  }
}
  

