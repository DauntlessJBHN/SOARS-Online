import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  GoToSubmitReport(){
    this.router.navigate(['/submit-report'])
  
  }

  GoToRenewal(){
    this.router.navigate(['/renewal'])
  
  }

  GoToCertificate(){
    this.router.navigate(['/certificate'])
  
  }

}
