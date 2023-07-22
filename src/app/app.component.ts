import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  
  ngOnInit() {
  }
  GoToHome(){
    this.router.navigate(['/home'])
  }
  GoToAnnouncements(){
    this.router.navigate(['/announcements'])
  }

  GoToMembership(){
    this.router.navigate(['/membership'])
  }

  GoToRequests(){
    this.router.navigate(['/requests'])
  }

  GoToAccount(){
    this.router.navigate(['/account'])
  }

  GoToLogin(){
    this.router.navigate(['/login'])
  }
}

