import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DiagnosisApiService {
  public classData: any;
  constructor(public http: HttpClient, public config: ConfigService) { }

  loadSymptoms() {

    let url = `${this.config.getAPIURL()}/symptoms`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))
  }

  loadIssues() {

    let url = `${this.config.getAPIURL()}/issues`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))

  }


  loadIssueInfo(issueId) {

    let url = `${this.config.getAPIURL()}/issues/${issueId}/info`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))

  }

  loadDiagnosis(selectedSymptoms, gender, yearOfBirth) {

    let symptoms = selectedSymptoms.split(',');
    let url = `${this.config.getAPIURL()}/diagnosis?symptoms=` + JSON.stringify(symptoms) + `&gender=${gender.value}&year_of_birth=${yearOfBirth}`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))

  }

  loadSpecialisations(selectedSymptoms, gender, yearOfBirth) {

    let symptoms = selectedSymptoms.split(',');
    let url = `${this.config.getAPIURL()}/diagnosis/specialisations?symptoms=` + JSON.stringify(symptoms) + `&gender=${gender.value}&year_of_birth=${yearOfBirth}`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))

  }

  loadProposedSymptoms(selectedSymptoms, gender, yearOfBirth) {

    let symptoms = selectedSymptoms.split(',');
    let url = `${this.config.getAPIURL()}/symptoms/proposed?symptoms=` + JSON.stringify(symptoms) + `&gender=${gender.value}&year_of_birth=${yearOfBirth}`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))

  }

  loadBodyLocations() {

    let url = `${this.config.getAPIURL()}/body/locations`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))

  }

  loadBodySublocations(bodyLocationId) {

    let url = `${this.config.getAPIURL()}/body/locations/${bodyLocationId}`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))

  }

  loadBodySublocationSymptoms(bodySublocationId, selectorStatus) {

    let url = `${this.config.getAPIURL()}/symptoms/${bodySublocationId}/${selectorStatus.value}`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))
  }

  loadRedFlagText(symptomId) {

    let url = `${this.config.getAPIURL()}/redflag?symptomId=${symptomId}`;
    let headers = new HttpHeaders()
    let extraArgs = 'token=' + this.config.getToken() + '&language=' + this.config.getLanguage() + '&format=' + this.config.getFormat();
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;

    if (this.config.getFormat() == "json")
      return this.http.get(url, { headers: headers }).pipe(map(data => { return data }))
    else
      return this.http.get(url, { headers: headers }).pipe(map((res: Response) => { return res }))

  }
}
