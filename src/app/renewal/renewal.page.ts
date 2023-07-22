import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.page.html',
  styleUrls: ['./renewal.page.scss'],
})
export class RenewalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    GoToHome(){
      this.router.navigate(['/home'])
    
    }

}
