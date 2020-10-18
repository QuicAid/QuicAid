import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL: string = "https://sandbox-authservice.priaid.ch/login";
  private apiKey: string = "";
  private secretKey: string = "";
  private hashed_credentials: string = "";
  public authToken: string = ""

  constructor(public http: HttpClient) {
    this.authToken = "";
  }

  getToken() {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.apiKey +":" + this.hashed_credentials);
    return this.http.post(this.authURL, headers);
  }
}
