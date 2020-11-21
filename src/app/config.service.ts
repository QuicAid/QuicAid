import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public mainURL: string = "https://sandbox-healthservice.priaid.ch";
  public token: string;
  public language: string;
  public format: string;
  public symptoms: string;
  public config_info: any = {
    "method": "Get",
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "URL": "",
    "url": "",
    "headers": {
      "Accept": "application/json, text/plain, */*"
    }
  }
  constructor(public authService: AuthService) {
    this.token = "";
    this.language = "";
    this.format = "";
  }

  getAPIURL() {
    return this.mainURL;
  }

  getConfig() {
    return this.config_info;
  }

  setConfig(config_info) {
    this.config_info = config_info;
  }

  getToken() {
    if (this.token === "") {
      return this.authService.getToken();
    } else {
      return this.token;
    }
  }

  setToken(token) {
    this.token = token;
  }

  getLanguage() {
    return this.language;
  }

  setLanguage(lang) {
    this.language = lang;
  }

  getFormat() {
    return this.format;
  }

  setFormat(format) {
    this.format = format;
  }


}
