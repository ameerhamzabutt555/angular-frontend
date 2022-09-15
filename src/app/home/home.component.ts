import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productlink:any="";
  campaignid:any="";
  adgroupid:any="";
  creavtiveid:any="";
  data:any=[];
  generateLink:any="";

  constructor(private user:UserservicesService) { }

  ngOnInit(): void {
    this.userData()
  }

  link(data:any){
    this.user.attribution(data).subscribe((results)=>{
      if(results['att_url'] !==""){

        this.generateLink=results['att_url']
      }
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Plz Fill Form Correctly!',
      })
    })
console.warn(data)
  this.productlink="";
  this.campaignid="";
  this.adgroupid="";
  this.creavtiveid="";
  }
  userData(){
    const token=localStorage.getItem('token')
    this.user.getLoggedInUser(token).subscribe((data:any)=>{
      this.data=data
    })
   }

}
