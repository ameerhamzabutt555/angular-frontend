import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {

  constructor() {

  }

  signUp(val:any){
    console.warn(val)
    // val['scope']="superuser"
    // val['is_active']=true
    // this.user.savedata(val).subscribe((results)=>{
    //   console.warn(results)
    // })
  }

  loginData(vals:any){
    console.warn(vals)
    // this.user.login(vals).subscribe((results)=>{
    //   console.warn(results)
    // })
   }

}










