import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from '../apiRequest/api-request.service';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private apiRequestService: ApiRequestService,
  ) {}


  getToken(): boolean {
    const token = this.localStorageService.getLocalStorageValues('currentUser');

    if (token) {
      return true;
    }

    return false;
  }

  async logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('login');
  }

  async login(){
    let data=await this.apiRequestService.apiRequest('GET','user');
    localStorage.setItem('currentUser','test');
    this.router.navigateByUrl('');
    return data;
  }
}
