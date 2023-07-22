import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  menuType: string = 'push';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  GoToAnnouncements(){
    this.router.navigate(['/announcements'])
  }
  GoToOffice(){
    this.router.navigate(['/office'])
  }
  GoToStudentCouncils(){
    this.router.navigate(['/studentcouncils'])
  }
  GoToStudentOrganizations(){
    this.router.navigate(['/studentorganizations'])
  }
}
