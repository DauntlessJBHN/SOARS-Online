import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-submit-report',
  templateUrl: './submit-report.page.html',
  styleUrls: ['./submit-report.page.scss'],
})
export class SubmitReportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    GoToHome(){
      this.router.navigate(['/home'])
    
    }

}
