import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseServicesService {

  constructor(private http: HttpClient) { }

    private baseUri: String = 'http://localhost:53751/api/base/';

  loginService(username: string, password: string) {
    this.http.get(this.baseUri + 'test-method').subscribe ( (response) => {
      console.log('Response :' + response);
    });
  }
}
