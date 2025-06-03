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
        title: '<span style="font-family:Arial">Missing Information</span>',
        html: '<div style="font-family: Arial;">Please enter your full name before sending.</div>',
        confirmButtonText: 'Close',
        confirmButtonColor: '#115f42'
      });
        return;
      }
    
    this.sendService.postMessage(message).subscribe({
      next: (response: any) => {
        Swal.fire({
          title: '<span style="font-family:Arial">Message sent!</span>',
          html: `<pre style="font-family:Arial">${JSON.stringify(response, null, 2)}</pre>`,
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor: '#115f42'
        });
      },
      error: (error: any) => {
        Swal.fire({
          html: '<div style="font-family: Arial;">Something went wrong.</div>',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#115f42'
        });
      }
    });
  }
}
  

