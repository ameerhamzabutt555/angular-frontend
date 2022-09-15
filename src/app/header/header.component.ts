import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserservicesService } from '../userservices.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  data:any=[];
  constructor(private router: Router,private user:UserservicesService) {}

  ngOnInit(): void {
    this.userData()
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  userData(){
    const token=localStorage.getItem('token')
    this.user.getLoggedInUser(token).subscribe((data:any)=>{
      this.data=data
      console.log(this.data)
    })
   }
}
