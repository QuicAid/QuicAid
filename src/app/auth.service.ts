import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL: string = "https://sandbox-authservice.priaid.ch/login";
  private apiKey: string = "nsedrick101@gmail.com";
  private secretKey: string = "Pn86Hoe4L2NkSf5p9";
  private computedHash: any;
  private computedHashString: string;
  private authArgs: string;
  public authToken: string;

  constructor(public http: HttpClient) {
    this.authToken = "";
  }

  getToken() {
    this.computedHash = CryptoJS.HmacMD5(this.authURL, this.secretKey);
    this.computedHashString = this.computedHash.toString(CryptoJS.enc.Base64);
    this.authArgs = "Bearer " + this.apiKey + ":" + this.computedHashString;
    console.log(this.authArgs);
    let headers = new HttpHeaders().set("Authorization", this.authArgs);
    return this.http.post(this.authURL, "", { headers });
  }
}
