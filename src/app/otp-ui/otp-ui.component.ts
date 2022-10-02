import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp-ui',
  templateUrl: './otp-ui.component.html',
})
export class OtpUiComponent implements OnInit {
   
  fg = new FormGroup({
    phoneNumber: new FormControl(),
  });


  constructor( 
    private http:HttpClient,
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  saveOtp(){
this.http.post<any>('http://localhost:8081/otp',this.fg.value).subscribe(data => {
  console.log(data);
  if (data.statusCode === 200){
    console.log('got to next page');
    this.toastr.success("OTP Send Successfully"); 
    this.router.navigate(['/success']);
  } 
  
},
error => {
  console.log(error.status);
  this.toastr.error("OTP Send Faild, Please Enter the valid Number")
})

  }

}
