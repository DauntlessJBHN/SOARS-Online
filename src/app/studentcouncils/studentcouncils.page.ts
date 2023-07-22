import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentcouncils',
  templateUrl: './studentcouncils.page.html',
  styleUrls: ['./studentcouncils.page.scss'],
})
export class StudentcouncilsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    GoToHome(){
      this.router.navigate(['/home'])
    
  }
  
  GoToSSC(){
    this.router.navigate(['/ssc'])
  
}

}
