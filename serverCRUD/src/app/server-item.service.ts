import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerItemService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClient) {

  }

  getServers() {
    return this.http.get('${this.url}/servers')
  }

  getServersByID(id) {
    return this.http.get('${this.url}/servers/${id}')
  }

  createServer(name) {
    const server = {
      name: name,
    };
    return this.http.post('${this.url}/servers/create', server);
  }

  updateServer(id, name) {
    const server = {
      name: name,
    };
    return this.http.post('${this.uri}/servers/update/${id}', server);
  }
}
