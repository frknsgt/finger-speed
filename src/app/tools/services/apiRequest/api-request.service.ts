import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = environment.apiUrl;

  async apiRequest(
    method: string,
    request: string,
    body: any = null,
    token: string = '',
    query: string = ''
  ) {
    let options: Object = {};

    if (body) {
      options = { ...options, body: body };
    }

    if (token) {
      options = { ...options, headers: { token: token } };
    }
    return new Promise((resolve, reject) => {
      this.httpClient
        .request<any>(method, this.apiUrl + request + query, options)
        .subscribe(
          (res) => resolve(res),
          (error) =>
            reject({
              status: error.status,
              message:
                error.error != undefined ? error.error.message : error.message,
            })
        );
    });
  }
}
