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

  constructor(private user:UserservicesService) { }

  ngOnInit(): void {
  }

  link(data:any){
    this.user.attribution(data).subscribe((results)=>{
      if(results['att_url'] !==""){

        Swal.fire("Copy",results['att_url'])
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

}
