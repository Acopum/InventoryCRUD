import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  uri = 'http://localhost:4000/server';

  constructor(private http: HttpClient) { }

  addServer(serverName) {
    const obj = {
      serverName: serverName,
    };
    console.log(obj);
    this.http.post(`${this.uri}/create`, obj)
        .subscribe(res => console.log('Done'));
  }
}
