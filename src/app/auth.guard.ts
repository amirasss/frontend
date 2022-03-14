import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor(private router:Router){}
  token:any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.token=localStorage.getItem('token');
     if(this.token){ return true;
    }
    else{ this.router.navigate(['login'])
    throw new Error("Method not implemented.");
  }



}}
