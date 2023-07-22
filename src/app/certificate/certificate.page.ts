import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.page.html',
  styleUrls: ['./certificate.page.scss'],
})
export class CertificatePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
    GoToHome(){
      this.router.navigate(['/home'])
    
    }

}
