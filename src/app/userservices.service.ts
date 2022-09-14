import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http:HttpClient) { }

  login(body:any){
    let formdata = new FormData()
    for(let a in body){
      formdata.set(a,body[a])
    }

    let url = "http://13.58.95.104:8000/login/";
    return this.http.post(url,formdata);

  }
  savedata(data:any){

    let url = "http://13.58.95.104:8000/users/";
    return this.http.post(url,data);

  }
  del(id:any){

    let url = `http://localhost:4000/v1/users/delete/${id}`;
    return this.http.delete(url);

  }

  update(id:any,data:any){

    let url = `http://localhost:4000/v1/users/update/${id}`;
    return this.http.put(url,data);

  }

}
