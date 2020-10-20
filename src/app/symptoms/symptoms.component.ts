import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { DiagnosisApiService } from '../diagnosis-api.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  symptoms: any;
  selectedSymptom: any;

  constructor(public apiService: DiagnosisApiService, public config: ConfigService) {
    this.config.getToken();
    try {
      this.apiService.loadSymptoms()
        .subscribe(data => {
          console.log(data);
          this.symptoms = data;
        },
          error => {
            console.log('error:', error);
          })

    } catch (e) {
      console.info('could not get symptoms');
    }
  }

  saveSymptom(value): void {
    this.selectedSymptom = value;
    console.log(this.selectedSymptom);
  }
  getDiagnosis() {

  }
  ngOnInit(): void {
  }

}
