import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SendService {
  constructor(private http: HttpClient) {}

  postMessage(message: string) {
    const url = 'https://sample.lteprocess.com/trythis';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'sendthis': '123Lucas'
    });

    const body = { message };

    return this.http.post(url, body, { headers });
  }
}
