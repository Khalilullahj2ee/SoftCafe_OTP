import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-otp-success',
  templateUrl: './otp-success.component.html',
  styleUrls: ['./otp-success.component.css']
})
export class OtpSuccessComponent implements OnInit {
 
displayVal: any;

  constructor(
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.displayVal = params.data;
      

    })
  }

}
