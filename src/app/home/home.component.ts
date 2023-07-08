import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userData:any;
httpData: any;
url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

  callApi() {
    this.http.get<any[]>(this.url).subscribe(data => {
      this.httpData = data;
    },(error) =>{
      alert('something went wrong')
    });
  }

}
