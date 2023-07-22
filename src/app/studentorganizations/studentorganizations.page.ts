import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentorganizations',
  templateUrl: './studentorganizations.page.html',
  styleUrls: ['./studentorganizations.page.scss'],
})
export class StudentorganizationsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    GoToHome(){
      this.router.navigate(['/home'])
    
    }

}
