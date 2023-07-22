import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ssc',
  templateUrl: './ssc.page.html',
  styleUrls: ['./ssc.page.scss'],
})
export class SscPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  GoToSubmitReport(){
    this.router.navigate(['/submit-report'])
  
  }

}
