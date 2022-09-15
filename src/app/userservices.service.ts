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

    let url = "https://attribution.protuffproducts.com/login/";
    return this.http.post(url,formdata);

  }
  attribution(body:any){
    let formdata = new FormData()
    for(let a in body){
      formdata.set(a,body[a])
    }

    let url = "https://attribution.protuffproducts.com/attributions/";
    return this.http.post(url,formdata);

  }
  savedata(data:any){

    let url = "https://attribution.protuffproducts.com/users/";
    return this.http.post(url,data);

  }



}
