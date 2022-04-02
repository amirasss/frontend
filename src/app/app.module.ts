import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowDonationComponent } from './show-donation/show-donation.component';
import { ProfileComponent } from './profile/profile.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
const routes:Routes=[
  {path :'',component:HomeComponent,canActivate:[AuthGuard]},
  {path :'login',component:LoginComponent},
  {path :'register',component:RegisterComponent},
  {path:'add',component:AddProductComponent},
  {path:'show/:id',component:ShowDonationComponent},
  // {path:'profile',component:ProfileComponent},
  {path:'delete',component:DeleteComponent},
  // {path:'edit/:id',component:UpdateComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    AddProductComponent,
    ShowDonationComponent,
    ProfileComponent,
    DeleteComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
