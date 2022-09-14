import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservicesService } from '../userservices.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {

  constructor(private router:Router,private user:UserservicesService) { }

  signUp(val:any){
    console.warn(val)
    val['scope']="superuser"
    val['is_active']=true
    this.user.savedata(val).subscribe((results)=>{
      if(results['status']=="201"){
        Swal.fire('User Rigester Successfully')
      }
    },error=>{
      Swal.fire('please Fill Correct Form')
    })
  }

  loginData(vals:any){
    this.user.login(vals).subscribe((results)=>{
      var token=results["access_token"]
      localStorage.setItem("token",token)
      this.router.navigate(['home'])
    },error=>{
      Swal.fire('please Enter correct Email Password')
    })
   }

  //  login(){
  //   this.router.navigate(['home'])
  //  }

}










