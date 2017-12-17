import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private http: HttpClient) {
      //this.getData();
    }
    baseUri: String = 'http://localhost:53751/api/base/';

  getData() {

    this.http.get(this.baseUri + 'test-method').subscribe ( (response) => {
      console.log('Response :' + response);
    });
  }

}
