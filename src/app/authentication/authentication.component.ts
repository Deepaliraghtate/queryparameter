import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  jwt: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.queryParams.subscribe(
      params => {
        console.log('Got the JWT as: ', params['jwt']);
        this.jwt =  params['jwt'];
      }
    )
  }

}
