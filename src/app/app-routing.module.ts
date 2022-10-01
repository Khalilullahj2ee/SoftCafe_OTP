import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpSuccessComponent } from './otp-success/otp-success.component';
import { OtpUiComponent } from './otp-ui/otp-ui.component';

const routes: Routes = [
  {path: "", component: OtpUiComponent},
  {path: "success", component: OtpSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
