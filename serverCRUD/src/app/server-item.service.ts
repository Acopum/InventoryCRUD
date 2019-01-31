import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const portNo = 60221;

@Injectable({
  providedIn: 'root'
})

export class ServerItemService {

  url = 'http://localhost:'+portNo;

  constructor(private http: HttpClient) {

  }

  getServers() {
    return this.http.get(`${this.url}/servers`)
  }

  getServersByID(id) {
    return this.http.get(`${this.url}/servers/${id}`)
  }

  createServer(name) {
    const server = {
      name: name,
    };
    return this.http.post(`${this.url}/servers/create`, server);
  }

  updateServer(id, name) {
    const server = {
      name: name,
    };
    return this.http.post(`${this.url}/servers/update/${id}`, server);
  }

  deleteServer(id) {
    return this.http.get(`${this.url}/servers/delete/${id}`);
  }
}
