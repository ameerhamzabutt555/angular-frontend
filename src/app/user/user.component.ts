import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservicesService } from '../userservices.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  first_name:any="";
  last_name:any="";
  username:any="";
  password:any="";


  constructor(private router:Router,private user:UserservicesService) {

  }




  signUp(val:any){
    console.warn(val)
    val['scope']="superuser"
    val['is_active']=true
    this.user.savedata(val).subscribe((results)=>{
      if(results['status']=="201"){
        Swal.fire('User Rigester Successfully')
      }
      this.first_name="";
      this.last_name="";
      this.username="";
      this.password="";
    },error=>{
      Swal.fire('please Fill Correct Form')
      this.first_name="";
      this.last_name="";
      this.username="";
      this.password="";
    })
  }

  loginData(vals:any){
    this.user.login(vals).subscribe((results)=>{
      console.log(results)
      var token=results["access_token"]
      localStorage.setItem("token",token)
      this.router.navigate(['home'])
    },error=>{
      Swal.fire('please Enter correct Email Password')
    })
   }



  public ngOnInit(){

  }
  //  login(){
  //   this.router.navigate(['home'])
  //  }

}










