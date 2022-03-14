import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DonationService {
  apiUrl='http://127.0.0.1:8000/api/posts';
  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get<any[]>(this.apiUrl);
  }


  insertData(data: any){
    return this.httpClient.post("http://127.0.0.1:8000/api/posts/",data);
  }
}
