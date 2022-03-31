import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DonationService {
  apiUrl='http://127.0.0.1:8000/api/posts/';
  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get<any[]>(this.apiUrl);
  }


  insertData(data: any){
    const headers=new HttpHeaders();
    return this.httpClient.post("http://127.0.0.1:8000/api/posts/",data,{
      headers:headers
    });
  }

  getDonationById(id: any){
    const headers=new HttpHeaders();
    return this.httpClient.get("http://127.0.0.1:8000/api/posts/"+id);
  }

  deletePost(id:any){
    return this.httpClient.delete("http://127.0.0.1:8000/api/posts/"+id);
  }

  updatePoste(id:any,data:any){
    return this.httpClient.put("http://127.0.0.1:8000/api/posts/"+id,data);

  }
}
